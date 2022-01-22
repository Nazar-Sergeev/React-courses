import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../../services/user.service";
import UserPost from "../../../components/UserPost/UserPost";
import '../UsersPage.css'

const SecondUsersPage = () => {

    const {id} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getUserPostById(id).then(value => setPosts([...value]));
    }, [id]);

    return (
        <div className={'wrapUserPost'}>
            {posts.map(userPost => <UserPost key={userPost.id} userPost={userPost}/>)}
        </div>
    );
};


export default SecondUsersPage;