import {useForm} from "react-hook-form";

const FormDog = ({getFormDogData}) => {
    const {handleSubmit, register, reset} = useForm();

    const submitDog = (data) => {
        getFormDogData(data)
        reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(submitDog)}>
                <label>Add dog: <input type="text" {...register('dog')}/></label>
                <button>SAVE</button>
            </form>
        </div>
    );
};


export {FormDog};