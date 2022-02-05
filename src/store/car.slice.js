import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../services/car.service";

export const getAllCars = createAsyncThunk(
    'getAllCars/carSlice',
    async () => {
        return await carService.getAll()
    }
)

export const updateCarById = createAsyncThunk(
    'carSlice/updateCarById',

    async ({id, car}, {dispatch}) => {
        const newCar = await carService.updateById(id, car);
        dispatch(updateCar({car: newCar}))
    }
);

const carSlice = createSlice({

    name: 'carSlice',

    initialState: {
        cars: [],
        status: null,
        carUpdate: null
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
        },

        carToUpdate: (state, action) => {
            state.carUpdate = action.payload.car
        },

        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.car.id);
            state.cars[index] = action.payload.car
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

export const {addCar, deleteCar, carToUpdate, updateCar} = carSlice.actions
export default carReducer;