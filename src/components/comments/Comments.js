import {useEffect, useState} from "react";


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
            {
                comments.map(comment =>
                    <div key={comment.id}>
                        <h5>{comment.id} - {comment.name}</h5>
                        <p>{comment.body}</p>
                    </div>

                )
            }
        </div>
    );
}