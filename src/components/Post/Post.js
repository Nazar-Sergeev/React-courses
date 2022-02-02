const Post = ({post:{id, title, body}}) => {

    return (
        <div>
            <h3>{id}</h3>
            <h5>Title: {title}</h5>
            <p><b>Body:</b> {body}</p>
            <hr/>
        </div>
    );
};

export {Post};