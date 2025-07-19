const express = require("express");
const routes = require("./routes/routes.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static("uploads"));

app.use("/files", routes.uploads);

exports.app = app;
