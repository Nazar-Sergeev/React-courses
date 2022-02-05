import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services/user.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await userService.getAll()

        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

const userSlice = createSlice({
    name: 'userSlice',

    initialState: {
        users: [],
        status: null,
        error: null
    },

    reducers: {},

    extraReducers: {

        [getAllUsers.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },

        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
            state.error = null
        },

        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }

})

const userReducer = userSlice.reducer

export default userReducer;