const Dog = ({item, getDogId}) => {
    const {id, dog} = item;
    return (
        <div>
            <h1>{dog}</h1>
            <button onClick={() => getDogId(id)}>delete</button>
        </div>
    );
};


export {Dog};