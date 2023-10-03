import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="swiggy">
      <Header />
      <Outlet />
    </div>
  );
};

const basename = "/React"; // Replace '/React' with your desired basename

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/restaurant/:resID",
          element: <RestaurantMenu />,
        },
      ],
      errorElement: <Error />,
    },
  ],
  { basename } // Pass the basename as an option to createBrowserRouter but Mandatory at Server(to host)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
