const mongoose = require('mongoose');

// chlo abhi schema define krte hai
const personSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },

    age : {
        type : Number
    },

    work : {
        type : String,
        Enum : ['waiter', 'chef', 'manager'],
        required : true
    },

    mobile : {
        type : String,
        required : true
    },

    email : {
        type : String, 
        required : true,
        unique : true
    },

    address : {
        type : String,
    },

    salary : {
        type : Number,
        required : true

    }
});

// abhi hum iss person ke schema se person ka model bhi baneyenge

const Person = mongoose.model('Person', personSchema);
module.exports = Person;



