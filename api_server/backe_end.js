const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const student_route = require('./routes/student_route')


//Mongoose Connections
mongoose.connect('mongodb://127.0.0.1:27017/students')
    .then((x) => {
        console.log(`Connected to MongoDB Successfully! Database name: 
    "${x.connections[0].name}"`)
    })
    .catch(
        (err) => {
            console.error('Error connecting to mongodb', err.reason)
        })

//Express App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', student_route);

//Port Setup
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {console.log(`listening on port ${port}...`)});

