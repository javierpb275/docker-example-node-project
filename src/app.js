const express = require("express");
const morgan = require("morgan");
const indexRouter = require("./routes/index");

const app = express();

app.use(morgan("dev"));

app.use("/", indexRouter);

module.exports = app;
