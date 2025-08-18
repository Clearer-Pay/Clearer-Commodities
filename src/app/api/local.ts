
import agent from "./agent";


export enum LocalStorageVariables {
  ACCESS_TOKEN = "star-5000",
  REFRESH_TOKEN = "beminda-553",
  
}

export const SetItem = (title: string, data: string) => {
  const encryptData = agent.encryptRequest(data);
  localStorage.setItem(title, JSON.stringify(encryptData));
};
export const GetItem = (title: string) => {
  const data = window.localStorage.getItem(title);
  return agent.decryptResponse(data!);
};


