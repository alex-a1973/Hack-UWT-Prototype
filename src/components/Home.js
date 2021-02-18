import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import logo from '../images/logo1_TB.png';
import './Home.css'

const Home = () => {
    return (
        <React.Fragment>
            <header className="header-container">
                <div className="logo-container">
                    <img src={logo} className="logo" alt="logo"/>
                </div>
                <div className="apply-btn-container">
                    {/* Link to application page */}
                    <div className="apply-btn-link-wrapper">
                        <Link to="/apply" className="apply-btn-link">Apply Now</Link>
                    </div>
                </div>
            </header>
            <Footer/>
        </React.Fragment>
    );
}

export default Home;