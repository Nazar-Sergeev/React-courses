import React from 'react';

const Cat = ({cat, update}) => {

    return (
        <div>
            <div>
                <div><img src={cat} alt={cat}/></div>
                <button onClick={update}>Update</button>
            </div>
        </div>
    );
};

export default Cat;