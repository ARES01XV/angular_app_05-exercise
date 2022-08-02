const mongoose = require('mongoose');

const schema = mongoose.Schema;

//Define collection & schema
let Student = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    cohort: {
        type: String,
        required: true
    }, 
    phone_number: {
        type:  Number,
        required: true
    }
}, 
{
    collection: 'students'
});

module.exports = mongoose.model('Student', Student);