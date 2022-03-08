import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  getpost,
  getPostCategory,
  getPostCNAU,
} from "../../../../api/store/actions/postAction";
import "./Category.scss";
function Category(props) {
  const slug = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.post);
  const postCNDL = useSelector((state) => state.postReducer.postCNDL);
  console.log(slug.page);
  useEffect(() => {
    const getPostByCategory = async () => {
      await dispatch(getPostCategory(slug.page));
      await dispatch(getpost());
    };
    getPostByCategory();
  }, [dispatch, slug]);
  console.log(postCNDL);
  return (
    <div className="category">
      <div className="grid wide">
        <div className="row">
          <div className="col l-9">
            {postCNDL &&
              postCNDL.slice(0, 3).map((post, index) => (
                <div className="category__item">
                  <Link to={`/post/${post._id}`} className="category__img">
                    <img src={post.attachment} alt="" />
                  </Link>
                  <div className="category__info">
                    <Link to={`/post/${post._id}`}>{post.title}</Link>
                    <p
                      dangerouslySetInnerHTML={{ __html: post.description }}
                    ></p>
                  </div>
                  <div></div>
                </div>
              ))}
            {postCNDL && postCNDL.length > 3 ? (
              <div
                style={{
                  padding: "10px",
                  border: "1px solid #000",
                  width: "120px",
                  textAlign: "center",
                  fontSize: "18px",
                  borderRadius: "30px",
                  margin: "10px auto",
                }}
              >
                <span>Load More</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col l-3" style={{ borderLeft: "1px solid #ccc" }}>
            <div
              style={{
                padding: "10px",
                fontSize: "18px",
                fontWeight: "600",
                width: "100%",
                textAlign: "center",
              }}
            >
              Bài viết mới nhất
            </div>
            {posts &&
              posts.slice(0, 5).map((post, index) => (
                <Link
                  to={`/post/${post._id}`}
                  className="category__nav"
                  key={index}
                >
                  <div className="category__nav-img">
                    <img src={post.attachment} alt="" />
                  </div>

                  <p>{post.title}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
