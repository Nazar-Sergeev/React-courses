const Comment = ({comment: {id, name, body}}) => {
    return (
        <div>
            <h3>{id} - {name}</h3>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export {Comment};