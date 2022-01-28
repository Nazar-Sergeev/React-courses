import React, {useState} from 'react';

import './Form.css'

const Form = () => {

    const [form, setForm] = useState({});

    const submit = (e) => {
        e.preventDefault()
        console.log(e.target.cat.value)

    }

    return (
        <div>

            <div className={'d-flex'}>
                <form onSubmit={submit}>
                    <label>Add Cat: <input type="text" name={'cat'}/></label>
                    <button>SAVE</button>
                </form>
                <form>
                    <label>Add Dog: <input type="text" name={'dog'}/></label>
                    <button>SAVE</button>
                </form>
            </div>

        </div>
    );
};


export default Form;