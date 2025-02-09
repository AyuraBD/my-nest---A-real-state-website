import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Residentials from "../Pages/Residentials/Residentials";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Details from "../Pages/Residentials/Details";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound/NotFound";

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
        loader: () => fetch('/residential.json'),
        element: <Residentials></Residentials>
      },
      {
        path:`/residential/details/:id`,
        loader: async ({params}) => {
          const response = await fetch(`/residential.json`);
          if(!response.ok){
            throw new Error('An error occurred while fetching data.');
          }
          const data = await response.json();
          const resident =  data.find(res => res.id === parseInt(params.id));
          if(!resident){
            throw new Error('Residential not found.');
          }
          return resident;
        },
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path:'/signup',
        element: <Signup></Signup>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
  ,
    {
      path:'*',
      element: <NotFound></NotFound>
    }
]);

export default Router;
