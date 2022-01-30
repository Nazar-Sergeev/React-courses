import {useForm} from "react-hook-form";

const FormCat = ({getFormCatData}) => {
    const {handleSubmit, register, reset} = useForm();

    const submitCat = (data) => {
        getFormCatData(data)
        reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(submitCat)}>
                <label>Add cat: <input type="text" {...register('cat')}/></label>
                <button>SAVE</button>
            </form>
        </div>
    );
};


export {FormCat};