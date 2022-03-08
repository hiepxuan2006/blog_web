import React, { useEffect } from "react";
import CamNangAnuongItem from "./CamNangAnuongItem";
import "./CamNangAnUong.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPostCNAU } from "../../../../api/store/actions/postAction";
function CamNangAnUong(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.postCNAU);
  useEffect(() => {
    const getCNAU = async () => {
      await dispatch(getPostCNAU("cnanuong"));
    };
    getCNAU();
  }, [dispatch]);
  return (
    <div className="camnanganuong" style={{ margin: "50px" }}>
      <div className="grid wide">
        <div
          className="camnanganuong__heading"
          style={{ color: "red", fontSize: "18px" }}
        >
          <h1
            style={{
              color: "red",
              padding: "12px",
              border: "2px solid red",
              borderRadius: "20px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Cẩm nang ăn uống
          </h1>
        </div>
        <div className="row">
          {posts &&
            posts.map((post, index) => (
              <div className="col l-4" key={index}>
                <CamNangAnuongItem post={post} index={index} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CamNangAnUong;
