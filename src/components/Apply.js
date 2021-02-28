import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import './Apply.css';

const Apply = () => {
    // Set initial state of component.
    const [state, setState] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        street: '',
        zipcode: '',
        state: '',
        gender: 0,
        date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        inPerson: 0,
        shirtSize: '',
        teamID: null
    });

    const onChangeEmail = (e) => {
        // Set the email property of the state object with user input
        const newEmail = e.target.value;
        setState(prevState => {
            return Object.assign({}, prevState, { email: newEmail });
        });
    }

    const onChangeFirstName = (e) => {
        // Set the first name property of the state object with user input
        const newFirstName = e.target.value;
        setState(prevState => {
            return Object.assign({}, prevState, { firstName: newFirstName });
        });
    }

    const onChangeLastName = (e) => {
        // Set the last name property of the state object with user input
        const newLastName = e.target.value;
        setState(prevState => {
            return Object.assign({}, prevState, { lastName: newLastName });
        });
    }

    const onChangePhone = (e) => {
        let phoneNum = e.target.value;
        const splitPhone = phoneNum.split('-');
        phoneNum = '';
        for (let i = 0; i < splitPhone.length; i++) {
            phoneNum += splitPhone[i];
        }        
        
        // Set the phone number property of the state object with reformatted phone number
        setState(prevState => {
            return Object.assign({}, prevState, { phone: phoneNum });
        });
    }

    const onChangeStreet = (e) => {
        // Set the street property of the state object with user input
        const newStreet = e.target.value;
        setState(prevState => {
            return Object.assign({}, prevState, { street: newStreet });
        });
    }

    const onChangeZipcode = (e) => {
        // Set the street property of the state object with user input
        const newZipcode = e.target.value;
        setState(prevState => {
            return Object.assign({}, prevState, { zipcode: newZipcode });
        });
    }

    const onChangeState = (e) => {
        // Set the street property of the state object with user input
        const newState = e.target.value;
        setState(prevState => {
            return Object.assign({}, prevState, { state: newState });
        });
    }

    const onChangeGender = (e) => {
        // Set the street property of the state object with user input
        const newGender = e.target.value;
        setState(prevState => {
            return Object.assign({}, prevState, { gender: newGender });
        });
    }

    const onChangeInPerson = (e) => {
        // Set the street property of the state object with user input
        const newInPerson = e.target.value;
        setState(prevState => {
            return Object.assign({}, prevState, { inPerson: newInPerson });
        });
    }

    const onChangeShirtSize = (e) => {
        // Set the street property of the state object with user input
        const newShirtSize = e.target.value;
        setState(prevState => {
            return Object.assign({}, prevState, { shirtSize: newShirtSize });
        });
    }

    const onSubmit = (e) => {
        e.preventDefault(); // Prevent the default HTML form behavior from taking place
        const registrant = {
            email: state.email,
            firstName: state.firstName,
            lastName: state.lastName,
            phone: state.phone,
            street: state.street,
            zipcode: state.zipcode,
            state: state.state,
            gender: state.gender,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
            inPerson: state.inPerson,
            shirtSize: state.shirtSize,
            teamID: null
        }

        console.log(registrant);

        // POST user information to MySQL database
        axios.post('http://localhost:5000/registrants/add', registrant)
            .then(response => console.log(response.data));
        
        // TODO: Redirect user to next page
        // window.location = '/...';
    }

    return (
        <React.Fragment>
            <section className="apply-container">
                <div className="modal">
                    <form onSubmit={onSubmit} className="modal-content">
                        <div className="form-container">
                            <h1>Hack @ UWT</h1>
                            <p>Please fill this form to register for this event</p>
                            <hr/>
                            {/* Email */}
                            <label htmlFor="email"><b>Email</b></label>
                            <input type="email" placeholder="Enter Email" name="email" required onChange={onChangeEmail}/>
                            {/* First Name */}
                            <label htmlFor="first-name"><b>First Name</b></label>
                            <input type="text" placeholder="Enter First Name" name="first-name" required onChange={onChangeFirstName}/>
                            {/* Last Name */}
                            <label htmlFor="last-name"><b>Last Name</b></label>
                            <input type="text" placeholder="Enter Last Name" name="last-name" required onChange={onChangeLastName}/>
                            {/* Phone */}
                            <label htmlFor="phone"><b>Phone Number</b></label>
                            <input type="tel" placeholder="012-345-6789" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required onChange={onChangePhone}></input>
                            {/* Street */}
                            <label htmlFor="addr"><b>Address</b></label>
                            <input type="text" placeholder="1900 Commerce St, Tacoma" name="addr" required onChange={onChangeStreet}/>
                            {/* Zipcode */}
                            <label htmlFor="zip"><b>Zipcode</b></label>
                            <input type="text" placeholder="98402" name="zip" required onChange={onChangeZipcode}/>
                            {/* State */}
                            <label htmlFor="state"><b>State</b></label>
                            <input type="text" placeholder="WA" name="state" onChange={onChangeState}/>
                            {/* Gender */}
                            <div className="gender-selection radio-div">
                                <p><b>Gender</b></p>
                                <input type="radio" value="0" name="gender" id="male" onChange={onChangeGender}/>
                                <label htmlFor="male">Male</label>
                                <input type="radio" value="1" name="gender" id="female" onChange={onChangeGender}/>
                                <label htmlFor="female">Female</label>
                                <input type="radio" value="2" name="gender" id="other" onChange={onChangeGender}/>
                                <label htmlFor="other">Other</label>
                            </div>
                            {/* Date */}
                            {/* In Person */}
                            <div className="in-person-selection radio-div">
                                <p><b>In Person</b></p>
                                <input type="radio" name="in-person" id="yes" value="0" onChange={onChangeInPerson}/>
                                <label htmlFor="yes">Yes</label>
                                <input type="radio" name="in-person" id="no" value="1" onChange={onChangeInPerson}/>
                                <label htmlFor="no">No</label>
                            </div>
                            {/* Shirt Size */}
                            <label htmlFor="shirt-size" id="shirt-size-label"><b>Choose a shirt size:</b></label>
                            <select name="shirt-size" id="shirt-size-dropdown" onChange={onChangeShirtSize}>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                            {/* TeamID */}
                            {/* Submit Btn */}
                            <br/>
                            <button type="submit" className="register-btn">Register</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default Apply;