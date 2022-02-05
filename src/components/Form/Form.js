import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {addCar, updateCarById} from "../../store";
import {useEffect} from "react";

const Form = () => {

    const dispatch = useDispatch();

    const {handleSubmit, register, reset, setValue} = useForm();
    const {carUpdate} = useSelector(state => state['carReducer']);

    const submit = (data) => {
        dispatch(addCar({data}))
        dispatch(updateCarById({id: carUpdate.id, car: data}))
        reset()
    }

    useEffect(() => {
        if (carUpdate) {
            setValue('model', carUpdate.model)
            setValue('price', carUpdate.price)
            setValue('year', carUpdate.year)
        }
    }, [carUpdate]);

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" placeholder={'model'} {...register('model')}/></label>
                <label>Price: <input type="text" placeholder={'price'} {...register('price')}/></label>
                <label>Year: <input type="text" placeholder={'year'} {...register('year')}/> </label>
                <button>Update</button>
            </form>
        </div>
    );
};

export {Form};