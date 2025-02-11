import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import AboutMe from "../pages/HomePage/AboutMe/AboutMe";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
            index: '/',
            element:<HomePage />,
           
        }
      ]
    },
  ]);

export default Router;