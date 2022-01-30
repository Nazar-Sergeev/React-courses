import {createSlice} from "@reduxjs/toolkit";

const catSlice = createSlice({
    name: 'catSlice',
    initialState:{
        cats: []
    },
    reducers:{
        addCat: (state, action) => {
            state.cats.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteCat: (state, action) => {
            state.cats = state.cats.filter(cat => cat.id !== action.payload.id);
        }
    }
})

const catReducer = catSlice.reducer;

export const {addCat, deleteCat} = catSlice.actions;

export default catReducer;