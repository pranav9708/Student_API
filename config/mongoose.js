const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/student_api");

const db=mongoose.connection;

db.on("error",console.error.bind(console,"Error while connecting to Database"));

db.once("open",()=>{
    console.log("connected to Database");
})

module.exports = db;