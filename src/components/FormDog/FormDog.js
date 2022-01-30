import {useForm} from "react-hook-form";


const FormDog = ({addDog}) => {


    const {handleSubmit, register, reset} = useForm();

    const submit = (data) => {
        addDog(data)
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Add dog: <input type="text" {...register('dogs')}/></label>
                <button>SAVE</button>
            </form>
        </div>
    );
};

export {FormDog};