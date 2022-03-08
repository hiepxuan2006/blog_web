import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getPostDalat,
  getPostPlaceItem,
} from "../../../api/store/actions/postAction";
import Header from "../../HomePage/header/Header";
import "./Placedetail.scss";
import { Link } from "react-router-dom";
function PlaceDetail(props) {
  const slug = useParams();
  console.log(slug);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postReducer.postPlaceItem);
  const postDalat = useSelector((state) => state.postReducer.postDiadiem);
  useEffect(() => {
    const getPlace = async () => {
      await dispatch(getPostPlaceItem(slug.tendiadiem));
      if (slug.tendiadiem) await dispatch(getPostDalat(slug.tendiadiem));
    };
    getPlace();
  }, [dispatch, slug]);
  console.log(postDalat);
  return (
    <div className="place__detail">
      <div
        className="place__detail-bg"
        style={{ backgroundImage: `url(${post.attachment})` }}
      >
        <h1>{post && post.name}</h1>
      </div>
      <div className="grid wide">
        <div className="place__detail-info">
          <div className="place__detail-desc">
            <div className="place__detail-heading">
              <h2>Giới thiệu về {post.name}</h2>
            </div>
          </div>
          <div className="place__detail-text">
            <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
          </div>
        </div>
        <div className="place__detail-post">
          <div className="place__detail-heading">
            <h2>Các bài viết về {post.name}</h2>
          </div>
          <div className="row">
            <div className="col l-12 m-12 c-12">
              {postDalat &&
                postDalat.map((item, i) => (
                  <div className="list__post">
                    <Link to={`/post/${item._id}`} className="list__post-img">
                      <img src={item.attachment} alt="" />
                    </Link>
                    <div className="list-post-desc">
                      <Link to={`/post/${item._id}`}>{item.title}</Link>
                      <span>{item.category}</span>
                      <div
                        style={{ display: "flex", gap: "4px", color: "red" }}
                      >
                        <span>
                          Post on : {moment(item.createAt).format("DD/MM/YYYY")}
                        </span>
                        <span> by: {item.owner && item.owner.userName}</span>
                      </div>
                      <p
                        className=""
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetail;
