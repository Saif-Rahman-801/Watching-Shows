import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Home/Layout";
import AllShows from "../Pages/Home/AllShows";
import Summary from "../Pages/Summary/Summary";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout /> ,
      children: [
        {
          path: "/",
          element: <AllShows />
        },
        {
          path: "/summary/:id",
          element: <Summary />
        }
      ]
    },
  ]);

export default router