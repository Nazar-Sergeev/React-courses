import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../services/post.service";


export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async () => {
            const posts = await postService.getAll();
            return posts;
    }
)

const postSlice = createSlice({
    name: 'postSlice',

    initialState: {
        posts: [],
        status: null
    },

    reducers: {},
    extraReducers: {
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload
        }
    }
})

const postReducer = postSlice.reducer;

export default postReducer;