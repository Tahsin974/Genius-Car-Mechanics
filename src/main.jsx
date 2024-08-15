import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Roots/Roots.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Booking from './Pages/Booking/Booking/Booking.jsx';
import Login from './Pages/Login/Login/Login.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute.jsx';
import AddService from './Pages/AddService/AddService.jsx';
import ServicesManage from './Pages/ServicesManage/ServicesManage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children : [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/booking/:serviceID",
        element:
           <PrivateRoute><Booking></Booking></PrivateRoute>
      
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/addservice",
        element: <AddService></AddService>
      },
      {
        path: "/manageservices",
        element: <ServicesManage></ServicesManage>
      },

    ]
  },

  {
    path : "*",
    element: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
