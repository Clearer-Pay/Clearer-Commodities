import { useEffect, useState } from "react";
import { JwtPayload ,jwtDecode} from "jwt-decode";
import { GetItem, LocalStorageVariables } from "../app/api/local";

interface MyJwtPayload extends JwtPayload {
  role?: string;
}

const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const token = GetItem(LocalStorageVariables.ACCESS_TOKEN);
    if (token) {
      try {
        const decodedToken = jwtDecode<MyJwtPayload>(token);
        setAuth(true);
        setRole(decodedToken.role || 'User'); 
      } catch (error) {
        console.error('Failed to decode token:', error);
        setAuth(false);
        setRole(null);
      }
    } else {
      setAuth(false);
      setRole(null);
    }
  }, []);

  return { auth, role, setAuth, setRole };
};

export default useAuth;