import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <h5>PostID: {postId}</h5>
            <h5>Id: {id}</h5>
            <h5>Name: {name}</h5>
            <h5>Email: {email}</h5>
            <h5>Body: {body}</h5>
        </div>
    );
};


export default Comment;