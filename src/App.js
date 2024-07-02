import React from "react";
import ReactDOM from "react-dom/client";

import Body from './components/Body.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Error from './components/Error.js'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import RestaurantInfo from "./components/RestaurantInfo.js";

 const AppLayout = () => {
  return (
    <div>
       <Header/>
       <Outlet/>
       <Footer/>
    </div>
  );
};


const appRouter = createBrowserRouter([
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails/>,
        // element: <RestaurantInfo/>,
        // element: <RestaurantMenu/>,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
