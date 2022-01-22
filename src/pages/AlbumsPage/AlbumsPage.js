import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import AlbumUser from "../../components/AlbumUser/AlbumUser";
import {albumService} from "../../services/album.service";

const AlbumsPage = () => {
    const {id} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getByIdAlbum(id)
            .then(value => setAlbums([...value]))
    },[id])

    return (
        <div>
            <h1>Albums</h1>
            {albums.map(album => <AlbumUser key={album.id} album={album}/>)}
            <div>
                <Outlet/>
            </div>
        </div>
    );
};


export default AlbumsPage;