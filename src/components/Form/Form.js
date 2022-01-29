import {useForm} from "react-hook-form";

const Form = ({getFormCatData,getFormDogData}) => {

    const {handleSubmit, register, reset} = useForm();

    const submitCat = (data) => {
        getFormCatData(data)
        getFormDogData(data)
        reset()
    };

    // const submitDog = (data) => {
    //     getFormDogData(data)
    //     reset()
    // };

    return (
        <div style={{display:'flex', justifyContent: 'space-around'}}>
            <form onSubmit={handleSubmit(submitCat)}>
                <label>Add cat: <input type="text" {...register('cat')}/></label>
                <button>SAVE</button>
            </form>
            <form onSubmit={handleSubmit(submitCat)}>
                <label>Add dog: <input type="text" {...register('dog')}/></label>
                <button>SAVE</button>
            </form>
        </div>
    );
};


export {Form};