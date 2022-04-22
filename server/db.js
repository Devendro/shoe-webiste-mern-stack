// Creating connection with mongoose server
const mongoose = require("mongoose");

//Creating function to export and use in another file
const connectToMongo = () => {
  mongoose.connect(
    "mongodb+srv://devendro:devendro@cluster0.32fsr.mongodb.net/Shoeniverse?retryWrites=true&w=majority"
  ).then(() =>{
    console.log('connection succesfull')
  } );
};

module.exports = connectToMongo;
