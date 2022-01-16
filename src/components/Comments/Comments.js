import {useEffect, useState} from "react";

import Comment from "../Comment/Comment";


export default function Comments() {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(response=>{
                setComments(response);
            })

    }, []);
    return (
        <div className='comments_block'>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
}