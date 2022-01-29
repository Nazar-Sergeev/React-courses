const Cat = ({item, getId}) => {
    const {id, cat} = item;
    console.log(cat)
    return (
        <div>
          <h1>Name: {cat}</h1>
            <button onClick={() => getId(id)}>delete</button>
        </div>
    );
};


export {Cat};