import React, {useEffect, useState} from 'react';
import {getService} from "../../services/get.service";

const Cat = () => {

    const [cat, setCat] = useState({});

    useEffect(() => {
        update()
    },[])


    const update = async () => {

        getService.getAll('cat').then(value => {
            let imageUrl = URL.createObjectURL(value)
            setCat(imageUrl)
        })
    }

    return (
        <div>
            <div>
                {<img src={cat} alt={cat}/>}
                <button onClick={update}>Update</button>
            </div>
        </div>
    );
};

export default Cat;