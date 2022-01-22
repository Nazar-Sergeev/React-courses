import React from 'react';

import './PhotoAlbum.css'

const PhotoAlbum = ({photo:{albumId, id, title, thumbnailUrl}}) => {

    return (
        <div className={'wrapPhoto'}>
            <div>
                <h4>AlbumId: {albumId}</h4>
                <h4>Id: {id}</h4>
                <h4>Title: {title}</h4>
            </div>
            <div>
                <img src={thumbnailUrl} alt={title}/>
            </div>

        </div>
    );
};


export default PhotoAlbum;