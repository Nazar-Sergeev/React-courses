import React from 'react';
import {Link} from "react-router-dom";

const UserDetails = ({user}) => {
    return (
        <div>
            <h1>User Details</h1>
            <h2>{user.id} - {user.name} - {user.username}</h2>
            <h4>Email: {user.email}</h4>
            <h4>Phone: {user.phone}</h4>
            <h4>Website: {user.website}</h4>
            <div>
                <h4>Address:</h4>
                <ul>
                    <li>{user.address.street}</li>
                    <li>{user.address.suite}</li>
                    <li>{user.address.city}</li>
                    <li>{user.address.zipcode}</li>
                </ul>
                <h4>Geolocation: </h4>
                <ul>
                    <li>lat: {user.address.geo.lat}</li>
                    <li>lng: {user.address.geo.lng}</li>
                </ul>
                <h4>Company:</h4>
                <ul>
                    <li>{user.company.name}</li>
                    <li>{user.company.catchPhrase}</li>
                    <li>{user.company.bs}</li>
                </ul>
            </div>
            <Link to={'posts'}>
                <button>Posts user</button>
            </Link>
        </div>
    );
};


export default UserDetails;