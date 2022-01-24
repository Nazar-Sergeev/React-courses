import React from 'react';

const Dog = ({dog, update}) => {
    return (
        <div>
            <div>
                <img src={dog} alt={dog}/>
            </div>
            <button onClick={update}>Update</button>
        </div>
    );
};


export default Dog;