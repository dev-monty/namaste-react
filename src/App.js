import React, { lazy,Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
//import Grocery from "./components/Grocery"


const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
  
   const[userName,setUserName] = useState()
  useEffect(()=>{
   const data ={
    name :"Monty Kallur"
   }
   setUserName(data.name)

  },[]);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="swiggy">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
    </Provider>
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
          path: "/grocery",
          element: <Suspense fallback={<h2>Loading...</h2>}><Grocery /></Suspense>,
        },
        {
          path: "/restaurant/:resID",
          element: <RestaurantMenu />,
        },
        {
          path:"/Cart",
          element: <Cart />
        },
        {
          path:"/contact",
          element:<Contact />
        }
      ],
      errorElement: <Error />,
    },
  ],
    { basename } // Pass the basename as an option to createBrowserRouter but Mandatory at Server(to host)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
