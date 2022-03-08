import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostCategory } from "../../../../api/store/actions/postAction";
import "./CamNang.scss";
import CamNangConent from "./CamnangContent.js/CamNangConent";
function CamNang(props) {
  const posts = useSelector((state) => state.postReducer.postCNDL);
  const dispatch = useDispatch();
  useEffect(() => {
    const getPostByCategory = async () => {
      dispatch(getPostCategory("cndulich"));
    };
    getPostByCategory();
  }, [dispatch]);
  return (
    <div className="camnanglist">
      <div className="grid wide">
        <div className="row ">
          <div className="col l-8">
            <div className="camnang__heading">
              <h1>Cẩm Nang Du Lịch</h1>
            </div>
            {posts &&
              posts.slice(0, 4).map((post, index) => (
                <div key={index}>
                  <CamNangConent post={post} index={index} />
                </div>
              ))}
          </div>
          <div className="col l-4">
            <div style={{ background: "#ccc", height: "100%" }}>helo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CamNang;
