import {configureStore} from "@reduxjs/toolkit";

import dogReducer from "./dog.slice";
import catReducer from "./cat.slice";

const store = configureStore({
    reducer:{
        catReducer,
        dogReducer
    }
})

export default store;