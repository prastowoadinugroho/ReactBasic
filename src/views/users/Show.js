import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Show(){
    const [user, setUser] = useState([])
    let {identifier} = useParams();
    const getUser = async () => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
        setUser(response.data)
    }

    useEffect(() => {
        getUser()
    }, [identifier])

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    {user.name}
                </div>
                <div className="card-body">
                    <div>{user.username}</div>
                    <div>{user.website}</div>
                    <div>{user.phone}</div>
                    <div>{user.email}</div>
                </div>
            </div>
        </div>
    )
}

export default Show 