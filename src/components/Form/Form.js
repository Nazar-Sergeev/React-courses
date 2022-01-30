import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCar} from "../../store";

const Form = () => {

    const dispatch = useDispatch();

    const {handleSubmit, register, reset} = useForm();

    const submit = (data) => {
        dispatch(addCar({data}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Price: <input type="text" {...register('price')}/></label>
                <label>Year: <input type="text" {...register('year')}/> </label>
                <button>SAVE</button>
            </form>
        </div>
    );
};


export {Form};