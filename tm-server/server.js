const db = require("./src/models/db.js")
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const mapR = require('./src/router/MapRouter.js');
const userR = require('./src/router/UserRouter.js');
app.use(express.static("src"));
app.use('/',userR);
// app.use('/',mapR);

var bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

const cors = require('cors')
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));



db.sequelize.sync();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});