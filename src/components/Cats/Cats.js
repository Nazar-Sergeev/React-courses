import {Cat} from "../Cat/Cat";

const Cats = ({cats, getId}) => {
    return (
        <div>
            {cats.map(value=> <Cat key={value.id} item={value} getId={getId}/>)}
        </div>
    );
};


export {Cats};