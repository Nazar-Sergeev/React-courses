import {useForm} from "react-hook-form";

const Form = ({getFormData}) => {

    const {handleSubmit, register, reset} = useForm({});

    const submit = (data) => {
        getFormData(data)
        reset()
    };
    return (
        <div>
            <div style={{display:'flex', justifyContent: 'space-around'}}>

                <form onSubmit={handleSubmit(submit)}>
                    <label>Add Cat: <input type="text" {...register('cat')}/></label>
                    <button>SAVE</button>
                </form>

                <form onSubmit={handleSubmit(submit)}>
                    <label>Add Dog: <input type="text" {...register('dog')}/></label>
                    <button>SAVE</button>
                </form>

            </div>

        </div>
    );
};


export {Form};