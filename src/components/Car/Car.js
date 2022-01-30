const Car = ({car, getById}) => {

    const {id, model, price, year} = car;


    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: '20px'}}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
                <button onClick={() => getById(id)}>delete</button>
            </div>
        </div>
    );
};


export {Car};