const Cat = ({item, getCatId}) => {
    const {id, cat} = item
    return (
        <div>
            <h1>{cat}</h1>
            <button onClick={() => getCatId(id)}>delete</button>

        </div>
    );
};


export {Cat};