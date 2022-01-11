import {useEffect, useState} from "react";
import './Posts.css'

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
            {
                posts.map(post=>
                    <div key={post.id}>
                        <h5>{post.id} - {post.title}</h5>
                        <p>{post.body}</p>
                    </div>
                )
            }
        </div>    
    );
}    