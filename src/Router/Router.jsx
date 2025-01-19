import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Residentials from "../Pages/Residentials/Residentials";

const Router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/residential',
        loader: () => fetch('./residential.json'),
        element: <Residentials></Residentials>
      }
    ]
  }
]);

export default Router;
