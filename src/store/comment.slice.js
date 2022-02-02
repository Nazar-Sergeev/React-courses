import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService} from "../services/commnet.service";


export const getAllComments = createAsyncThunk(

    'commentSlice/getAllComments',

    async () => {
        const comments = await commentService.getAll();
        return comments;
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',

    initialState: {
        comments: [],
        status: null
    },

    reducers:{},

    extraReducers:{
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.comments = action.payload
        }

    }
})

const commentReducer = commentSlice.reducer;

export default commentReducer;