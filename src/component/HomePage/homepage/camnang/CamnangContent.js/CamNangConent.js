import React from 'react';
import { Link } from 'react-router-dom';

function CamNangConent(props) {
    const { post, index } = props
    return (
        <Link to={`/post/${post._id}`} key={index}>
            <div className={`camnang ${index === 0 ? ('camnang__big') : ''}`}>
                <div className="camnang__img">
                    <img
                        src={post.attachment}
                        alt=""
                    />
                </div>
                <div className="camnang__info">
                    <h3>{post.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: post.description }}
                    >
                    </p>
                </div>
            </div>

        </Link>
    );
}

export default CamNangConent;