import React from 'react';

const UserDetails = ({user, getUserId}) => {

    return (
        <div>
            <div>
                <h3>{user.id} - {user.name} - {user.username}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <div>
                    <p>Address:</p>
                    <ul>
                    <li>{user.address.street}</li>
                    <li>{user.address.suite}</li>
                    <li>{user.address.city}</li>
                    <li>{user.address.zipcode}</li>
                        <ul>
                            <p>Geolocation: </p>
                            <li>lat: {user.address.geo.lat}</li>
                            <li>lng: {user.address.geo.lng}</li>
                        </ul>
                    </ul>
                    <p>Company:</p>
                    <ul>
                        <li>{user.company.name}</li>
                        <li>{user.company.catchPhrase}</li>
                        <li>{user.company.bs}</li>
                    </ul>
                </div>
                <button onClick={() => getUserId(user.id)}>Posts</button>
            </div>

        </div>
    );
};


export default UserDetails;