import moment from 'moment';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getpost } from "../../../api/store/actions/postAction";
function ContentLeft(props) {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.postReducer.post)
  useEffect(() => {
    const getviewPost = async () => {
      await dispatch(getpost())
    }
    getviewPost()
  }, [])
  return (
    <div className="row ">
      {
        posts && posts.slice(0, 4).map((item, i) => (
          <div className="col l-6" key={i}>
            <Link to={`/post/${item._id}`} className="content__left-item">
              <img
                src={item.attachment}
                alt=""
              />
              <div className="content__left-desc">
                <span className="content__category">{item.category}</span>

                <div className="content__name">
                  <h1> {item.title}</h1>
                </div>
                <div className="content__infor ">
                  <span className="content__date"> Post on:
                    {
                      moment(item.createAt).format("DD/MM/YYYY")
                    }
                    <span className="content__author"> /by hiepxuan</span>
                  </span>
                </div>
                <p className="content__text "
                  dangerouslySetInnerHTML={{ __html: item.description }}

                >
                </p>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default ContentLeft;
