let express = require('express'); //creating express application 
const { nextTick } = require('process');
const { findByIdAndRemove } = require('../models/student');
const app = express();              //^

//Requiring the student model tht is used to connect to MongoDB
let Student = require('../models/student')

let student_route = express.Router() //student_route can be named anything that makes sense

//Home Route-------------------------------------------------------
student_route.route('/').get((req, res) => {
    Student.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//Create Student-------------------------------------------------------
student_route.route('/create').post((req, res) => {
    Student.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Remove a Student-------------------------------------------------------
student_route.route('/remove_student/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({ msg: data })
        }
    })
})

//Edit a Student-------------------------------------------------------
student_route.route('/student/:id').get((req, res) => {
    Student.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Update a Student-------------------------------------------------------
student_route.route('/update/:id').patch((req, res) => {
    Student.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            cohort: req.body.cohort,
            phone_number: req.body.phone_number
        },
        (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
})

// =====================================================================================================

module.exports = student_route; //exporting the route

