const mongoose = require('mongoose');

const schema = mongoose.Schema;

let Account = new schema({
    student_id: {
        type: schema.Types.ObjectID
    },
    account_number: {
        type: Number,
    },
    bank: {
        type: String
    },
    branch: {
        type: String
    },
    account_type: {
        type: String
    },
    status: {
        type: String
    }
},
    { collection: 'account' }
);

module.exports = mongoose.model('Account', Account);