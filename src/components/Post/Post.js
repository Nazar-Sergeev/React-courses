import React from 'react';

const Post = ({post}) => {

    return (
        <div>
            <h3>{post.id} = {post.title}</h3>
            <h5>{post.body}</h5>

        </div>
    );
};

export default Post;