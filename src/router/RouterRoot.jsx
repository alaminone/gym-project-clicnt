import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../page/mainpage/home/Home";
import Login from "../page/signup&signin/Login";
import Register from "../page/signup&signin/Register";
import Gallery from "../page/gallery/Gallery";
import Trainers from "../page/trainer/Trainers";
import Trainerdetiles from "../page/trainer/Trainerdetiles";
import Dashbord from "../DASHBOER/bord/Dashbord";
import Allsubscribers from "../DASHBOER/Allsubscribers/Allsubscribers";
import Alltrainer from "../DASHBOER/AllTrainer/Alltrainer";
import AllUsers from "../DASHBOER/Allusers/AllUsers";
import Classespage from "../component/classespage/Classespage";
import Becomeatrainer from "../component/becomeatrainer/Becomeatrainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/trainer",
        element: <Trainers></Trainers>,
      },
      {
        path:"/classespage",
        element:<Classespage></Classespage>
      },
      {
        path:"/becomeatrainer",
        element:<Becomeatrainer></Becomeatrainer>
      },
      {
        path: "/trainerdetails/:id",
        element: <Trainerdetiles />,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/trainers/${params.id}`)
      }
    ],
  },
  {
    path:'/dashbord',
    element:<Dashbord></Dashbord>,
    children:[
      {
        path:'allsubscribers',
        element:<Allsubscribers></Allsubscribers>
      },
      {
        path:"alltrainers",
        element:<Alltrainer></Alltrainer>
      },
      {
        path: 'allusers',
        element:<AllUsers></AllUsers>
      }
    ]
  }
]);
export default router;
