import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <header>
      <Navigation/>
      </header>
      
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
      <Footer/>
      </footer>
    </>
  );
}

export default Layout;
