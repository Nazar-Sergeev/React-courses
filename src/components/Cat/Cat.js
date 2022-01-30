

const Cat = ({cat, deleteCat}) => {

    const {id} = cat

    return (
        <div>
            <h1>{cat}</h1>
            <button onClick={() => deleteCat(id)}>delete</button>
        </div>
    );
};

export {Cat};