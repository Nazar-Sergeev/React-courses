import React from 'react';

const Notebook = ({notebook, update}) => {

    return (
        <div>
            <div>
                <img src={notebook} alt={notebook}/>
            </div>
            <button onClick={update}>Update</button>

        </div>
    );
};


export default Notebook;