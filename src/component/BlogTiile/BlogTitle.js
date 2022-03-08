import React from "react";
import "./BlogTitle.scss";
function BlogTitle(props) {
  return (
    <div className="blogtitle">
      <p>
        You will never be happy if you continue to search for what happiness
        consists of. You will never live if you are looking for the meaning of
        life viva la vida soledad adventure blog.
      </p>
      <div className="blogtitle__author">
        <span>ALBERT CAMUS</span>
      </div>
    </div>
  );
}

export default BlogTitle;
