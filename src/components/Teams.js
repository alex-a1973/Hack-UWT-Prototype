import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Teams.css';

const Teams = () => {
    const [state, setState] = useState({
        teams: []
    });

    useEffect(() => {
        axios.get('http://localhost:5000/teams/')
            .then(response => {
                setState(prevState => {
                    return Object.assign({}, prevState, { teams: response.data });
                });
                console.log(state);
            })
            .catch(err => console.log(err));
    }, []);

    const teamsList = () => {
        return state.teams.map(currTeam => {
            return (
                <tr>
                    <td>{currTeam.teamID}</td>
                    <td>{currTeam.teamName}</td>
                    <td>{currTeam.isPublic}</td>
                </tr>
            );
        });
    }

    return (
        <section className="teams-container">
            <Navbar/>
            <table className="teams-table">
                <thead>
                    <tr>
                        <th>Team ID</th>
                        <th>Team Name</th>
                        <th>Is Public</th>
                    </tr>
                </thead>
                <tbody>
                    { teamsList() }
                </tbody>
            </table>
        </section>
    );
}

export default Teams;