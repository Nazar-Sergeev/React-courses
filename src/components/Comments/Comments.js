import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Comment} from "../Comment/Comment";
import {getAllComments} from "../../store";

const Comments = () => {

    const dispatch = useDispatch();
    const {comments} = useSelector(state => state['commentReducer']);

    useEffect(() => {
        dispatch(getAllComments())
    },[])

    return (
        <div>
            <h1>Comments</h1>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};