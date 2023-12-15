const db = require("./src/models/db.js")
const express = require('express');
const app = express();

const userR = require("./src/router/UserRouter.js");
const travelR = require("./src/router/TravelRouter.js");
app.use(express.static("src"));
app.use('/',userR);
app.use('/',travelR);

var bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

const cors = require('cors')
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync();