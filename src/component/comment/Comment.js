import React from "react";
import "./Comment.scss";
function Comment(props) {
  return (
    <div className="comment">
      <div className="comment__item">
        <div className="comment__avatar"></div>
        <div className="comment__content">
          <span className="comment_name">hiepxuan</span>
          <span className="comment__desc">
            Hey there. My name is Penci. I was born with the love for traveling.
            I also love taking photos with my phone in order to capture moments
            in my life. It's my pleasure to have you here.
          </span>
        </div>
      </div>
      <div className="comment__item">
        <div className="comment__avatar"></div>
        <div className="comment__content">
          <span className="comment_name">hiepxuan</span>
          <span className="comment__desc">
            Hey there. My name is Penci. I was born with the love for traveling.
            I also love taking photos with my phone in order to capture moments
            in my life. It's my pleasure to have you here.
          </span>
        </div>
      </div>
      <div className="comment__total">
        <span>2 comments</span>
      </div>
      <div className="loadcomment">Load more</div>
    </div>
  );
}

export default Comment;
