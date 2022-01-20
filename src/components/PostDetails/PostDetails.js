import React from 'react';
import {Link} from "react-router-dom";

const PostDetails = ({post}) => {
    return (
        <div>
            <div>
                <h5>UserId: {post.userId}</h5>
                <h5>Id: {post.id}</h5>
                <h5>Title: {post.title}</h5>
                <h5>Body: {post.body}</h5>
            </div>
            <Link to={'comments'}>
                <button>Comments post</button>
            </Link>
        </div>
    );
};


export default PostDetails;