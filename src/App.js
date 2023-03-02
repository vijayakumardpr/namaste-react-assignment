import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Authentication from "./components/Authentication";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Contactus from "./components/Contactus";
import Task from "./components/Task";
import UserContext from "./utils/UserContext";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
//import Instamart from "./components/Instamart"

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [user, setUser] = useState({
    user: {
      name: "Steve smith",
      place: "Australia"
    }
  })

  const [isDark, setIsDark] = useState(true);

  function isLogging(message) {
    setIsTrue(message);
  }

  // value={{
  //   user: user,
  //   setUser: setUser
  // }}
  return (
    <>
      <UserContext.Provider
        value={{ isDark, setIsDark }}>
        {isTrue ? (
          <Authentication isLogging={isLogging} />
        ) : (
          <>
            <Header isLogging={isLogging} />
            <Outlet />
            <Footer />
          </>
        )}
      </UserContext.Provider>
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
      {
        path: "/instamart",

        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
