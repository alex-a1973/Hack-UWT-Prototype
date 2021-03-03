import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            {/* Home page/component */}
            <Link to="/" className="navbar-link">Home</Link>
            {/* Registrants page/component */}
            <Link to="/registrants" className="navbar-link">Registrants</Link>
            {/* Logins page/component */}
            <Link to="/logins" className="navbar-link">Logins</Link>
            {/* Teams page/component */}
            <Link to="/teams" className="navbar-link">Teams</Link>
        </nav>
    );
}

export default Navbar;