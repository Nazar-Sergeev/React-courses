import React from 'react';

const Comment = ({comment:{id, name, body}}) => {
    return (
        <div>
            <h5>{id} - {name}</h5>
            <p>{body}</p>
        </div>
    );
};


export default Comment;