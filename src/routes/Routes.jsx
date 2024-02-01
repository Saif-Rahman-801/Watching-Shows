import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Home/Layout";
import AllShows from "../Pages/Home/AllShows";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout /> ,
      children: [
        {
          path: "/",
          element: <AllShows />
        }
      ]
    },
  ]);

export default router