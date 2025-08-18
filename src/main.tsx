import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./app/stores/stores";
import { Provider } from "react-redux";
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes'
// import { AuthProvider } from "./context/AuthContext";
// import { SignInProvider } from "./context/SignInContext";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
