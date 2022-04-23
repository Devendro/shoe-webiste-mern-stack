// importing required files
const express = require("express");
const connectToMongo = require("./db");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();
const router = express.Router();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 4000;
const errorMiddleware = require("./middleware/error");
const order = require("./Routes/orderRoute");
const payment = require("./Routes/paymentRoute");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Creating Port
const server = app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

connectToMongo();
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down server due to issue");
  server.close(() => {
    process.exit(1);
  });
});

app.use(express.json());
app.use("/api/v1/auth", require("./Routes/auth"));
app.use("/api/v1", require("./Routes/ProductRoute"));
app.use("/api/v1", require("./Routes/orderRoute"));
app.use("/api/v1", require("./Routes/paymentRoute"));

// Middleware for Error
app.use(errorMiddleware);

//Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down server due to issue");
  server.close(() => {
    process.exit(1);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./shoewebsite/build/index.html"));
});

if ((process.env.NODE_ENV = "production")) {
  app.use(express.static(path.join(__dirname, "./shoewebsite/build")));
}
