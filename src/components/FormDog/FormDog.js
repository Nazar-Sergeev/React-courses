import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addDog} from "../../store";

const FormDog = () => {

    const dispatch = useDispatch();

    const {handleSubmit, register, reset} = useForm();

    const submit = (data) => {
        dispatch(addDog({data}))
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Add dog: <input type="text" {...register('dogName')}/></label>
                <button>SAVE</button>
            </form>
        </div>
    );
};

export {FormDog};