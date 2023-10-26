import { createBrowserRouter } from "react-router-dom";
// ----------------------------
import Home from "../pages/home/home";
import Search from "../pages/search/search";
import Detail from "../pages/detail/detail";
import Login from "../pages/login/login";
import Carts from "../pages/carts/carts";
import Profile from "../pages/profile/profile";
import Register from "../pages/register/register";
import HomeTemplate from "../templates/home/home.template";
import AuthTemplate from "../templates/auth/auth.template";

// setup router
// path không được có "/" phía trước đường dẫn.

/**
 * url: /home/detail/abc
 * <HomeTemplate>
 *  <Detail>
 *    <>Abc</>
 *  </Detail>
 * </HomeTemplate>
 */

export const router = createBrowserRouter([
  {
    path: "home",
    element: <HomeTemplate />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
      {
        path: "carts",
        element: <Carts />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthTemplate />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
