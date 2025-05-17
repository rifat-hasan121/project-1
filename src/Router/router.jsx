import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayouts from "../Pages/HomeLayouts";


const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayouts,
  },
]);

export default router;