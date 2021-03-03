import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Registrants.css';

const Registrants = () => {
    const [state, setState] = useState({
        registrants: []
    });

    // Replicate 'componentDidMount' lifecycle method
    useEffect(() => {
        axios.get('http://localhost:5000/registrants/')
            .then(response => {
                setState(prevState => {
                    return Object.assign({}, prevState, { registrants: response.data });
                });
            })
            .catch(err => console.log(err));
    }, [])

    const registrantsList = () => {
        return state.registrants.map(currRegistrant => {
            return (
                <tr>
                    <td>{currRegistrant.email}</td>
                    <td>{currRegistrant.firstName}</td>
                    <td>{currRegistrant.lastName}</td>
                    <td>{currRegistrant.phone}</td>
                    <td>{currRegistrant.street}</td>
                    <td>{currRegistrant.zipcode}</td>
                    <td>{currRegistrant.state}</td>
                    <td>{currRegistrant.gender}</td>
                    <td>{currRegistrant.date}</td>
                    <td>{currRegistrant.inPerson}</td>
                    <td>{currRegistrant.shirtSize}</td>
                    <td>{currRegistrant.teamID}</td>
                </tr>
            );
        });
    }

    return (
        <section className="registrants-container">
            <Navbar/>
            <table className="registrants-table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Street</th>
                        <th>Zipcode</th>
                        <th>State</th>
                        <th>Date</th>
                        <th>Gender</th>
                        <th>In Person</th>
                        <th>Shirt Size</th>
                        <th>Team ID</th>
                    </tr>
                </thead>
                <tbody>
                    { registrantsList() }
                </tbody>
            </table>
        </section>
    )
}

export default Registrants;