import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function PlaceItem(props) {
    const { post, index } = props
    console.log(post);
    return (

        <div className="col l-3" key={index}>
            <Link to={`/diadiem/${post.key}`} className="place__item">
                <img
                    src={post.attachment}
                    alt=""
                />
                <div className="place__desc">
                    <span>{post.name}</span>
                </div>
            </Link>
        </div>

    );
}

export default PlaceItem;