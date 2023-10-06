//import file
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost:27017/newCrud").then;
require("./db/conn");
const users = require('./models/Schema');
const cors = require('cors');
const router = require("./routes/Router");
const port = 8000;






app.use(cors());
app.use(express.json());
app.use(router);




// featching code
app.listen(port, (req, res) => {
    console.log(`server is started Port Number ${port}`);
});
