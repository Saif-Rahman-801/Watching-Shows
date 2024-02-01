import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Home/Layout";
import AllShows from "../Pages/Home/AllShows";
import Summary from "../Pages/Summary/Summary";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AllShows />,
      },
      {
        path: "/summary/:id",
        element: <Summary />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
