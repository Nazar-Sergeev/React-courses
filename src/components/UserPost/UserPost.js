import React from 'react';


const UserPost = ({userPost}) => {

    const {userId, id, title, body} = userPost;

    return (
        <div>
            <h5>UserId: {userId}</h5>
            <h5>Id: {id}</h5>
            <h5>Title: {title}</h5>
            <h5>Body: {body}</h5>
        </div>
    );
};


export default UserPost;