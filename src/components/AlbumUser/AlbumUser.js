import React from 'react';
import {Link} from "react-router-dom";

const AlbumUser = ({album:{userId, id, title}}) => {
    return (
        <div>
            <h4>UserId: {userId} - id: {id}</h4>
            <h5>Title: {title}</h5>
            <Link to={`${id}/photos`}>
                <button>Photos</button></Link>
        </div>
    );
};


export default AlbumUser;