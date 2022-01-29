import {Cat} from "../Cat/Cat";

const Cats = ({cats, getCatId}) => {
    return (
        <div>
            {cats.map(cat=> <Cat key={cat.id} item={cat} getCatId={getCatId}/>)}
        </div>
    );
};


export {Cats};