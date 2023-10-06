const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required:true
    },
    add: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique:true
    },
    desc: {
        type: String,
        required:true
    }

});

const users = new mongoose.model("users",Schema);
module.exports = users;
