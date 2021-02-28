const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

// Configures so we can have our environment variables in .env file
require('dotenv').config();

// Create our Express server
const app = express();
const port = process.env.PORT || 5000; // Port server will be on

// Middleware
app.use(cors());
app.use(express.json()) // Allow us to parse JSON, our server will be sending and receiving JSON

// Start our connection
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.SQL_PASS,
    database: process.env.DB_NAME
});

// Add API endpoint routes so server can be used to perform CRUD operations
const registrantsRouter = require('express').Router();
const loginsRouter = require('express').Router();
const teamsRouter = require('express').Router();

// './registrants/' GET request to find all registrants and return as JSON
registrantsRouter.route('/').get((req, res) => {
    const query = `
        SELECT * FROM hackuwt.registrants;
    `;
    // Query the database
    db.query(query, (err, result) => {
        if (err) {
            res.status(400).json('Error: ' + err);
        } else {
            console.log(result);
            // Send the result 
            res.json(result);
        }
    });
});

// './registrants/add' POST request to insert new registrant
registrantsRouter.route('/add').post((req, res) => {
    console.log(req);
    // Grab all the data the user posted
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const street = req.body.street;
    const zipcode = req.body.zipcode;
    const state = req.body.state;
    const gender = parseInt(req.body.gender);
    const date = req.body.date;
    const inPerson = req.body.inPerson;
    const shirtSize = req.body.shirtSize;
    const teamID = req.body.teamID;

    // Make an insert statement
    const query = `
        INSERT INTO hackuwt.registrants VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    // Query the database
    db.query(query, 
            [email, firstName, lastName, phone, street, zipcode, state, gender, date, inPerson, shirtSize, teamID],
            (err, result) => {
                if (err) {
                    res.status(400).json('Error: ' + err);
                } else {
                   console.log(result);
                   res.status(200).json('Success!');
                }
            });
});

// Tell the server to use the files under '/routes'
app.use('/registrants', registrantsRouter);
app.use('/logins', loginsRouter);
app.use('/teams', teamsRouter);

// Starts the server on certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});