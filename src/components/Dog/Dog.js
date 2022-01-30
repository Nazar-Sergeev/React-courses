
const Dog = ({dog, deleteDog}) => {

    const {id, dogName} = dog;

    return (
        <div>
            <h1>{dogName}</h1>
            <button onClick={() => deleteDog(id)}>delete</button>
        </div>
    );
};

export {Dog};