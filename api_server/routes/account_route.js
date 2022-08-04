let express = require('express');
const { nextTick } = require('process');
const { findByIdAndRemove } = require('../models/student');
const app = express();

//Requiring the account model tht is used to connect to MongoDB
let Account = require('../models/account')

let account_route = express.Router()

//Home Route-------------------------------------------------------
account_route.route('/').get((req, res, next) => {
    Account.find((err, data) => {
        if (err) {
            return next(err)
        } else {
            res.json(data);
        }
    })
})

// Add Accounting Info.--------------------------------------
account_route.route('/acc_create').post((req, res, next) => {
    Account.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

module.exports = account_route;