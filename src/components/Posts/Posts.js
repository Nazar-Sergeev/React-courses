import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Post} from "../Post/Post";
import {getAllPosts} from "../../store";

const Posts = () => {

    const dispatch = useDispatch();
    const {posts} = useSelector(state => state['postReducer']);

    useEffect(() => {
        dispatch(getAllPosts())
    }, []);

    return (
        <div>
            <h1>POSTS</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};