import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Logins.css';

const Logins = () => {
    const [state, setState] = useState({
        logins: []
    });

    // Send GET request to retrieve all logins from the database
    useEffect(() => {
        axios.get('http://localhost:5000/logins/')
            .then(response => {
                setState(prevState => {
                    return Object.assign({}, prevState, { logins: response.data });
                });
            })
            .catch(err => console.log(err));
    }, []);

    const loginsList = () => {
        return state.logins.map(currLogin => {
            return (
                <tr>
                    <td>{currLogin.email}</td>
                    <td>{currLogin.password}</td>
                    <td>{currLogin.dateCreated}</td>
                </tr>
            );
        });
    }

    return (
        <section className="logins-container">
            <Navbar/>
            <table className="logins-table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Date Created</th>
                    </tr>
                </thead>
                <tbody>
                    { loginsList() }
                </tbody>
            </table>
        </section>
    );
}

export default Logins;