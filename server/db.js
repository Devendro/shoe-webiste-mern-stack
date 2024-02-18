// Creating connection with mongoose server
const mongoose = require("mongoose");

//Creating function to export and use in another file
const connectToMongo = () => {
  mongoose.connect(
    "mongodb://localhost:27017/Shoeniverse",
    () => {
      console.log("Connected to MongoDB Succesfully");
    }
  );
};

module.exports = connectToMongo;
