import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import RequiredAuth from './RequiredAuth';
import App from '../layout/App';
import { AppRoutes } from './AppRoutes';
import SearchPage from '../../features/searchPage/SearchPage';
import RequestForQuote from '../../features/request/RequestForQuote';
import NavbarLinks from '../../pages/navbarLinks/NavbarLinks';
import Service from '../../pages/navbarLinks/services/Service';
import OurServices from '../../pages/ourServices/OurServices';
import AddMerchandise from '../../pages/merchandise/AddMerchandise';
import ItemPage from '../../pages/itemPage/ItemPage';
import Contact from '../../pages/contact/Contact';
import LandingPage from '../../features/landingPage/LandingPage';
import SignUp from '../../pages/authentication/register/SignUp';



export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <RequiredAuth />,
        children: [

        ],
      },
      { path: AppRoutes.home, element: <LandingPage /> },
      { path: AppRoutes.addMerchandice, element: <AddMerchandise /> },
      {
        path: AppRoutes.itemPage,
        element: <ItemPage/>,
      },
      {
        path: AppRoutes.quoteRequest,
        element: <RequestForQuote />,
      },
      {
        path: AppRoutes.moreDetailsRoutes,
        element: <NavbarLinks />,
      },
      {
        path: AppRoutes.service,
        element: <Service />,
      },
      {
        path: AppRoutes.ourServices,
        element: <OurServices />,
      },
      {
        path: AppRoutes.ourServices,
        element: <OurServices />,
      },
      {
        path: AppRoutes.search,
        element: <SearchPage />,
      },
      {
        path: AppRoutes.contact,
        element: <Contact />,
      },
      {
        path: AppRoutes.signup,
        element: <SignUp />,
      },
      { path: '*', element: <Navigate replace to={AppRoutes.notFound} /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
