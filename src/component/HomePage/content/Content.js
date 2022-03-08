import React, { useEffect } from "react";
import "./Content.scss";
import ContentLeft from "./ContentLeft";
import ContentRight from "../contentRight/ContentRight";
import { useDispatch, useSelector } from "react-redux";
import { getpost } from "../../../api/store/actions/postAction";
import CamNang from "../homepage/camnang/CamNang";
function Content(props) {

  return (
    <div className="content__container">
      <div className="grid wide" style={{
        borderTop: '3px solid red'
      }}>
        <div className="row ">
          <div className="col l-8">
            <ContentLeft />
          </div>
          <div className="col l-4">
            <ContentRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
