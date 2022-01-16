import {useEffect, useState} from "react";

import './Posts.css'
import Post from "../Post/Post";

export default function Posts() {


    const [posts, setPosts] = useState([]);
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(value => value.json())
                    .then(response => {
                        setPosts(response);
                    });
    }, []);


    return (
        <div className='posts_block'>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>    
    );
}    