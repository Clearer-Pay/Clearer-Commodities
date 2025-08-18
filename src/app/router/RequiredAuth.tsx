import { Navigate, Outlet } from "react-router-dom";

import { AppNavigationRoutes } from "./AppRoutes";
// import Loading from "../../common/loading/Loading";
// import { useAuthContext } from "../../context/AuthContext";
// import { GetItem, LocalStorageVariables } from "../api/local";

const RequiredAuth = () => {
  // const { auth } = useAuthContext();
  // const token = GetItem(LocalStorageVariables.ACCESS_TOKEN);

  // if (auth === null) {
  //   return <Loading />;
  // }

  // if (!auth && !token) {
  //   return <Navigate to={AppNavigationRoutes.home} />;
  // }

  return <Outlet />;
};

export default RequiredAuth;

