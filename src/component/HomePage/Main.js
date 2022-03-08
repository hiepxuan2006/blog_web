import React from "react";
import { Outlet } from "react-router";
import GoToTop from "../gotoTop/GoToTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import HomePage from "./homepage/HomePage";
import Logo from "./logo/Logo";
import Loading from '../Loading/Loading'
import { useSelector } from "react-redux";
function Main(props) {

  return (

    (< div className="main" >
      <Header />
      <Outlet />
      <GoToTop />
      <Footer />
    </div>)

  );
}

export default Main;
