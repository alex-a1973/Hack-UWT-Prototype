import React from 'react';
import Footer from './components/Footer';
import logo from './images/logo1_TB.png';
import './App.css';


const App = () => {
    return (
        <React.Fragment>
            <header className="header-container">
                <div className="logo-container">
                    <img src={logo} className="logo" alt="logo"/>
                </div>
                <div className="apply-container">
                    {/* Link to application page */}
                    <a href="#" className="apply-link">
                        Apply Now
                    </a>
                </div>
            </header>
            <Footer/>
        </React.Fragment>
    );
}

export default App;