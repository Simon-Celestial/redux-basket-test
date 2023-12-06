import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import Home from "./layouts/main/pages/Home";
import About from "./layouts/main/pages/About";
import AuthLayout from "./layouts/auth/AuthLayout";
import Login from "./layouts/auth/pages/Login";
import Register from "./layouts/auth/pages/Register";
import Detail from "./layouts/main/pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home/:id",
        element: <Detail />,
      },
      // {
      //   path: "user",
      //   element: <Users />,
      //   children: [
      //     {
      //       path: "userChilde",
      //       element: <FKEB />,
      //       children:[
              
      //       ]
      //     },
      //   ],
      // },
      { path: "*", element: <h1>Costom not found</h1> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "", element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};
