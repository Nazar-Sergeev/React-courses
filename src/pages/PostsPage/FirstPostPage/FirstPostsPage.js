import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../../services/post.service";
import PostDetails from "../../../components/PostDetails/PostDetails";

const FirstPostsPage = () => {
    
    const {id}=useParams()

    const [post, setPost] = useState(null);
    
    const {state} = useLocation();


    useEffect(() => {
        if (state) {
            setPost(state);
            return
        }
        postService.getById(id)
            .then(value => setPost({...value}));
    },[id])
    
    return (
        <div>
            {post && <PostDetails post={post}/>}
            <div><Outlet/></div>
        </div>
    );
};


export default FirstPostsPage;