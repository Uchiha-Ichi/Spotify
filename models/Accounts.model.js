const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    account_name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    create_date: {
        type: Date,
        required: true,
    },
    singer: {
        type: Boolean,
        required: true,
    }
});

let Accounts = mongoose.model("Account", accountSchema);

module.exports = { Accounts };