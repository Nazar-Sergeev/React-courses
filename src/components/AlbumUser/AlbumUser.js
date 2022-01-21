import React from 'react';

const AlbumUser = ({album:{userId, id, title}}) => {
    return (
        <div>
            <h4>UserId: {userId} - id: {id}</h4>
            <h5>Title: {title}</h5>
        </div>
    );
};


export default AlbumUser;