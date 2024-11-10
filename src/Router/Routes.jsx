import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Video from "../Pages/Video/Video";
import AboutUs from "../Pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/video",
        element: <Video></Video>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      }
    ],
  },
]);
