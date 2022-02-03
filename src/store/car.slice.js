import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../services/car.service";


export const getAllCars = createAsyncThunk(
    'getAllCars/carSlice',
    async () => {
        const cars = await carService.getAll();
        return cars
    }
)

const carSlice = createSlice({

    name: 'carSlice',

    initialState: {
        cars: [],
        status: null
    },

    reducers: {
        addCar: (state, action) => {
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },

        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        }
    }

})

const carReducer = carSlice.reducer

export const {addCar, deleteCar} = carSlice.actions
export default carReducer;