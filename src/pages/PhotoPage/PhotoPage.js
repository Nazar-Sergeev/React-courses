import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import PhotoAlbum from "../../components/PhotoAlbum/PhotoAlbum";
import {photoService} from "../../services/photo.service";

const PhotoPage = () => {

    const {albumId} = useParams();

    const [photos, setPhotos] = useState(   []);
    
    useEffect(() => {
        photoService.getByIdPhotos(albumId)
            .then(value => setPhotos([...value]))
    },[albumId])

    return (
        <div>
            {photos.map(photo=> <PhotoAlbum key={photo.id} photo={photo}/>)}
        </div>
    );
};


export default PhotoPage;