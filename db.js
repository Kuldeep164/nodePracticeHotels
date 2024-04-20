// This db.js file which we have created is esentially responsible for establishing a connection between our nodeJS application
// and our mongoDB database using the mongoose library

const mongoose = require('mongoose');

// basically yhan main define krr rha hu mongoDB ka url connection
const mongoURL = 'mongodb://localhost:27017/hotels'   // abhi hotels naam ka ek database bnane ki koshish ho rhi

mongoose.connect( mongoURL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
} )

// mongoose maintains a default connection object which represents the mongoDB connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log( 'database connection established' );
})

db.on('error', (error) => {
    console.log('database connection caused an error : ' , error);
})

db.on('disconnected', () => {
    console.log('database disconnected');
})

module.exports = db;
