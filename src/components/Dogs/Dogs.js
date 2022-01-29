import {Dog} from "../Dog/Dog";

const Dogs = ({dogs, getDogId}) => {
    return (
        <div>
            {dogs.map(dog => <Dog key={dog.id} item={dog} getDogId={getDogId}/>)}
        </div>
    );
};


export {Dogs};