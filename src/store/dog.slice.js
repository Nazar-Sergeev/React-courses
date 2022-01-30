import {createSlice} from "@reduxjs/toolkit";

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState: {
        dogs: []
    },
    reducers: {
        addDog: (state, action) => {
            state.dogs.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteDog: (state, action) => {
            state.dogs = state.dogs.filter(dog => dog.id !== action.payload.id);
        }
    }
});

const dogReducer = dogSlice.reducer;

export const {addDog, deleteDog} = dogSlice.actions;

export default dogReducer;