import React from 'react';

const Girl = ({girl, update}) => {
    return (
        <div>
            <div>
                <img src={girl} alt={girl}/>
            </div>
            <button onClick={update}>Update</button>
        </div>
    );
};


export default Girl;