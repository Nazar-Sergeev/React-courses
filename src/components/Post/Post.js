import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {

    const {userId,id, title} = post;

    return (
        <div>
            <h3>UserId: {userId}</h3>
            <h3>Id: {id}</h3>
            <h3>Title: {title}</h3>
            <Link to={id.toString()} state={post}><button>Posts Details</button></Link>
        </div>
    );
};


export default Post;