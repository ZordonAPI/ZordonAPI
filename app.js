const createError = require("http-errors");

const express = require("express");

const path = require("path");
const cookieParser = require("cookie-parser");
const router = require("./routes/routes");
const mongoose = require("./config/mongo");
const cors = require("cors");
mongoose.connectToMongo();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/api/", router);

module.exports = app;
