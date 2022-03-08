import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPostById } from "../../api/store/actions/postAction";
import BlogTitle from "../BlogTiile/BlogTitle";
import Comment from "../comment/Comment";
import ContentRight from "../HomePage/contentRight/ContentRight";
import moment from 'moment';

function Detail(props) {
  const slug = useParams()
  const dispatch = useDispatch()
  const post = useSelector((state) => state.postReducer.postById)
  console.log(post);
  useEffect(() => {
    const getAllpost = async () => {
      await dispatch(getPostById(slug.idPost))
    }
    getAllpost()
  }, [dispatch]);
  return (
    <div className="grid wide">
      <div className="detail__content">
        <div className="detail__session ">
          <img src={post.attachment} alt="" />
        </div>
        <div className="detail__header">
          <span className="detail__category">
            {(post.category === 'cndulich') && 'Cẩm nang du lịch'}
            {(post.category === 'cnanuong') && 'Cẩm nang ăn uống'}
          </span>
          <h3>{post.title}</h3>
          <div>
            <span style={{}}>Poster on : {moment(post.creatAt).format("DD/MM/YYYY")}</span>
            <span style={{ marginLeft: '20px', color: 'red' }}>by {post.owner && post.owner.userName} </span>
          </div>
        </div>
        <div className="detail__content">
          <div className="row">
            <div className="col l-8">
              <p
                className="detail__desc"
                dangerouslySetInnerHTML={{ __html: post.description }}
              ></p>

              <BlogTitle />

              <Comment />
            </div>
            <div className="col l-4">
              <ContentRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
