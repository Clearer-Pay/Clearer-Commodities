import "./App.css";
import LandingPage from "../../features/landingPage/LandingPage";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { useEffect, useState } from "react";
import { AppNavigationRoutes } from "../router/AppRoutes";

function App() {
  const [showIframe, setShowIframe] = useState(false);
  const location = useLocation();
  const noScrollRestorationRoutes = [`${AppNavigationRoutes.ourServices}#`];
  const shouldDisableScrollRestoration = noScrollRestorationRoutes.some(
    (route) => location.pathname === route && location.hash
  );

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <div className="app">
      <div className="center">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
          style={{ zIndex: 200000 }}
        />
        {!shouldDisableScrollRestoration && <ScrollRestoration />}
        <Navbar setShowIframe={setShowIframe} showIframe={showIframe} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
