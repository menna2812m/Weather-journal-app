
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3002;
const server = app.listen(port, listening);
 function listening(){
    console.log(`running on localhost: ${port}`);
  };

// get route
app.get('/all', (req, res) => {
    //code to send res data of endpoint object
    res.send(projectData);
    console.log(projectData);
})

// post route
app.post('/addData', (req, res)=>{
    //code to add data to endpoint object
    projectData.temp= req.body.temp;
    projectData.date = req.body.date;
    projectData.feeling = req.body.feeling;
    res.send(projectData);
    console.log(projectData);
})