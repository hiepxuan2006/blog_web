import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPostById } from "../../api/store/actions/postAction";
import Footer from "../HomePage/footer/Footer";
import Header from "../HomePage/header/Header";
import Logo from "../HomePage/logo/Logo";
import Loading from "../Loading/Loading";
import Detail from "./Detail";
import "./PostDetail.scss";

function PostDetail(props) {
  const loading = useSelector(state => state.postReducer.loading)

  return (
    <div className="detail">
      <Header />
      <Logo />
      {
        loading ? <Loading /> : (<Detail />)
      }
      <Detail />
      <Footer />
    </div>
  );
}

export default PostDetail;
