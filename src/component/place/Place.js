import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import { getPostPlace } from "../../api/store/actions/postAction";
import "../HomePage/footer/Footer";
import Footer from "../HomePage/footer/Footer";
import "../HomePage/header/Header";
import Header from "../HomePage/header/Header";
import "./Place.scss";
import PlaceHome from "./PlaceHome";
import PlaceItem from "./PlaceItem";
function Place(props) {

  return (
    <div className="diadiem">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Place;
