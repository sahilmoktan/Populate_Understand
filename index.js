const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://admin:admin@sahilcluster.luje49t.mongodb.net/relationship-backend?retryWrites=true&w=majority"
);

app.use(require("./routes/route"));
app.listen(3000, () => console.log("server on!"));
