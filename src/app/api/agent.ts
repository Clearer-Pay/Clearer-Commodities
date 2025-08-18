import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { GetItem, LocalStorageVariables, SetItem } from "./local";
import { PaginatedResult } from "../models/pagination";
import { router } from "../router/Routes";
import { AppNavigationRoutes } from "../router/AppRoutes";
import PBKDF2 from "crypto-js/pbkdf2";
import Utf8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
import { IAccessTokenResponse } from "../models/user";
import { IBasicResponse, IContactUs } from "../models/general";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

interface ErrorResponse {
  message: string;
  // Add other fields based on your error response structure
}

const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' }
});

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
const PassPhrase = String(import.meta.env.VITE_USER_PassPhrase);
const SaltValue = String(import.meta.env.VITE_USER_SaltValue);
const InitVector = String(import.meta.env.VITE_USER_InitVector);
const PasswordIterations = Number.parseInt(
  String(import.meta.env.VITE_USER_PasswordIterations)
);
const Blocksize = Number.parseInt(
  String(import.meta.env.VITE_USER_Blocksize)
);

// Encryption Service
const encryptRequest = (request: unknown) => {
  let plainText = "";
  if (typeof request === "string") {
    plainText = request;
  } else {
    plainText = JSON.stringify(request);
  }
  const key = PBKDF2(PassPhrase, Utf8.parse(SaltValue), {
    keySize: 256 / Blocksize,
    iterations: PasswordIterations,
  });
  const parsedIV = Utf8.parse(InitVector);

  // Encrypt
  const encrypted = AES.encrypt(plainText, key, {
    iv: parsedIV,
  }).toString();
  return encrypted;
};

// remove quotes string
export const cleanEncryptedString = (request: string) => {
  return request.replace(/["']/g, "");
};

// Decryption Service
const decryptResponse = (response: string) => {
  try {
    const key = PBKDF2(PassPhrase, Utf8.parse(SaltValue), {
      keySize: 256 / Blocksize,
      iterations: PasswordIterations,
    });
    const parsedIV = Utf8.parse(InitVector);

    // Decrypt
    const bytes = AES.decrypt(cleanEncryptedString(response), key, {
      iv: parsedIV,
    });
    const decryptedResponse = bytes.toString(Utf8);
    try {
      return JSON.parse(decryptedResponse);
    } catch (error) {
      return decryptedResponse;
    }
  } catch (error) {
    return null;
  }
};


const isTokenExpired = (token: string) => {
  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (e) {
    return true;
  }
}

axiosPrivate.interceptors.response.use(
  async (response) => {
    const pagination = response.headers["pagination"];
    if (pagination) {
      response.data = new PaginatedResult(
        response.data,
        JSON.parse(pagination)
      );
      return response as AxiosResponse<PaginatedResult<unknown>>;
    }
    return response;
  },
  async (error: AxiosError) => {
    const prevRequest = error.config as CustomAxiosRequestConfig;
    const status = error.response?.status;

    if (status === 401 && !prevRequest._retry) {
      prevRequest._retry = true;
      const refreshToken = GetItem(LocalStorageVariables.REFRESH_TOKEN);
      const isExpired = isTokenExpired(refreshToken)
      try {
        if (!isExpired) {
          const { data } = await axiosPrivate.post<IAccessTokenResponse>('/user/token/refresh', { refresh: refreshToken });
          console.log(data)
          const newAccessToken = data.access;
          SetItem(LocalStorageVariables.ACCESS_TOKEN, newAccessToken);
          axiosPrivate.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          if (prevRequest.headers) {
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          } else {
            prevRequest.headers = { 'Authorization': `Bearer ${newAccessToken}` };
          }
          return axiosPrivate(prevRequest);
        } else {
          console.log('Token expired');
          localStorage.removeItem(LocalStorageVariables.REFRESH_TOKEN)
          localStorage.removeItem(LocalStorageVariables.ACCESS_TOKEN)
          if (typeof window !== 'undefined') {
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }
        }
      } catch (err) {
        localStorage.removeItem(LocalStorageVariables.REFRESH_TOKEN)
        localStorage.removeItem(LocalStorageVariables.ACCESS_TOKEN)
        if (typeof window !== 'undefined') {
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
        return Promise.reject(err);
      }
    }
    const errorData = error.response?.data as ErrorResponse;
    switch (status) {
      case 400:
        toast.error(errorData.message);
        break;
      case 401:
        toast.error("Your session has expired. Please sign in to continue.");
        break;
      case 403:
        toast.error("Forbidden");
        break;
      case 404:
        router.navigate(AppNavigationRoutes.notFound);
        break;
      case 500:
      case 503:
        toast.error("Service Downtime");
        break;
      default:
        toast.error("An unexpected error occurred");
    }
    return Promise.reject(error);
  }
);

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = GetItem(LocalStorageVariables.ACCESS_TOKEN);


    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async (response) => {
    const pagination = response.headers["pagination"];
    if (pagination) {
      response.data = new PaginatedResult(
        response.data,
        JSON.parse(pagination)
      );
      return response as AxiosResponse<PaginatedResult<unknown>>;
    }
    return response;
  },
  async (error: AxiosError) => {
    const status = error.response?.status;
    const errorData = error.response?.data as ErrorResponse;
    switch (status) {
      case 400:
        toast.error(errorData.message);
        break;
      case 403:
        toast.error("Forbidden");
        break;
      case 404:
        router.navigate(AppNavigationRoutes.notFound);
        break;
      case 500:
      case 503:
        toast.error("Service Downtime");
        break;
      default:
        toast.error("An unexpected error occurred");
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    const refreshToken = GetItem(LocalStorageVariables.REFRESH_TOKEN);
    const isExpired = isTokenExpired(refreshToken)
    if (refreshToken && isExpired) {
      localStorage.removeItem(LocalStorageVariables.REFRESH_TOKEN)
      localStorage.removeItem(LocalStorageVariables.ACCESS_TOKEN)
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          router.navigate('/')
        }, 1500);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const requestsPublic = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    axios
      .post<T>(url, body, {
        headers: { "Content-type": "application/json;" },
      })
      .then(responseBody),
};

const requestsPrivate = {
  get: <T>(url: string) => axiosPrivate.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    axiosPrivate
      .post<T>(url, body, {
        headers: { "Content-type": "application/json;" },
      })
      .then(responseBody),
  postUrl: <T>(url: string, body: object) =>
    axiosPrivate
      .post<T>(url, body, {
        headers: { "Content-type": "application/json;" },
      })
      .then(responseBody),
  postWithoutBody: <T>(url: string) => axiosPrivate.post<T>(url).then(responseBody),
  put: <T>(url: string, body: object) =>
    axiosPrivate
      .put<T>(url, body, {
        headers: { "Content-type": "application/json;" },
      })
      .then(responseBody),
  del: <T>(url: string) => axiosPrivate.delete<T>(url).then(responseBody),
  delWithBody: <T>(url: string, body: object) =>
    axiosPrivate
      .delete<T>(url, {
        data: body,
        headers: { "Content-Type": "application/json" },
      })
      .then(responseBody),

  patch: <T>(url: string) => axiosPrivate.patch<T>(url).then(responseBody),
  patchWithBody: <T>(url: string, body: object) =>
    axiosPrivate
      .patch<T>(url, body, {
        headers: { "Content-type": "application/json;" },
      })
}


const Common = {
  contactUs: (payload: IContactUs) =>
    requestsPublic.post<IBasicResponse>(
      "/ContactUs/ContactUs",
      payload
    ),
};

const agent = {
  encryptRequest,
  decryptResponse,
  Common
};

export default agent;