import React from "react";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Contact from "../pages/Contact";

 export const routes = [
    { path: "", Element: <Home /> },
    { path: "contact", Element: <Contact /> },
    {path:"register", Element:<Register/>}
  ];
 
