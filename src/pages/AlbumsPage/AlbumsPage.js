import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import AlbumUser from "../../components/AlbumUser/AlbumUser";

const AlbumsPage = () => {
    const {id} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userService.getByIdAlbum(id)
            .then(value => setAlbums([...value]))
    },[id])

    return (
        <div>
            <h1>Albums</h1>
            {albums.map(album => <AlbumUser key={album.id} album={album}/>)}
        </div>
    );
};


export default AlbumsPage;