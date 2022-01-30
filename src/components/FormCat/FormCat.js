import {useForm} from "react-hook-form";


const FormCat = ({addCat}) => {


    const {handleSubmit, register, reset} = useForm();

    const submit = (data) => {
        addCat(data)
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Add cat: <input type="text" {...register('cats')}/></label>
                <button>SAVE</button>
            </form>
        </div>
    );
};

export {FormCat};