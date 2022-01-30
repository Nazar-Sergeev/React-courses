import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addCat} from "../../store";

const FormCat = () => {

    const dispatch = useDispatch();

    const {handleSubmit, register, reset} = useForm();

    const submit = (data) => {
        dispatch(addCat({data}))
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Add cat: <input type="text" {...register('catName')}/></label>
                <button>SAVE</button>
            </form>
        </div>
    );
};

export {FormCat};