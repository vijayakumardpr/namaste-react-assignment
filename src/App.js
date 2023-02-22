import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Authentication from "./components/Authentication";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Contactus from "./components/Contactus";
import Task from "./components/Task";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  const [isTrue, setIsTrue] = useState(false);

  function isLogging(message) {
    setIsTrue(message);
  }

  // console.log(RouterProvider);

  //console.log(createBrowserRouter);
  return (
    <>
      {isTrue ? (
        <Authentication isLogging={isLogging} />
      ) : (
        <>
          <Header isLogging={isLogging} />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/restaurants/:ids",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
