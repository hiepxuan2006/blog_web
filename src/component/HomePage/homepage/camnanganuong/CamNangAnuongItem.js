import React from "react";
import { Link } from "react-router-dom";

function CamNangAnuongItem(props) {
  const { post, index } = props;
  return (
    <Link
      to={`/post/${post._id}`}
      className="camnanganuongitem"
      key={index}
      style={{ marginTop: "30px" }}
    >
      <div className="camnanganuong__img">
        <img src={post.attachment} alt="" />
      </div>
      <div className="camnanganuong__info">
        <h3>{post.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
      </div>
    </Link>
  );
}

export default CamNangAnuongItem;
