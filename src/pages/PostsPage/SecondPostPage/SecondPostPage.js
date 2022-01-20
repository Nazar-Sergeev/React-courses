import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentService} from "../../../services/comment.service";
import Comment from "../../../components/Comment/Comment";

const SecondPostPage = () => {
    
    const {id} = useParams();

const [comments, setComments] = useState([]);

useEffect(() => {
    commentService.getById(id).then(value => setComments([...value]))
},[id])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};


export default SecondPostPage;