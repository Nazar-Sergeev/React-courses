import {useEffect, useState} from "react";
import Launch from "../Launch/Launch";


export default function Launches() {

    const [items, setItem] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(response => {
                setItem(response.filter(item => item.launch_year !== '2020'));
            
            });
    }, []);

    return (
        <div>
            {
                items.map(value => <Launch key={value.flight_number} item={value}/>)
            }
        </div>
    );
}