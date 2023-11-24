import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../page/mainpage/home/Home";
import Login from "../page/signup&signin/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);
  export default router;