const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv');

const errorMiddleware = require("./middlewares/errors");

//setting up config file
dotenv.config({path: "backend/config/config.env"});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Importing all routes

const products = require("./routes/products");
const auth = require("./routes/auth");
const payment = require('./routes/payment');
const order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use('/api/v1', payment)
app.use("/api/v1", order);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
