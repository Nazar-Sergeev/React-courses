const User = ({user: {id, name, username}}) => {
    return (
        <div>
            <h2>{id}) {name} - {username}</h2>
        </div>
    );
};

export {User};