import {useDispatch, useSelector} from "react-redux";
import {Comment} from "../Comment/Comment";
import {useEffect} from "react";
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