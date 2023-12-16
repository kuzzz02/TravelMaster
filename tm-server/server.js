const db = require("./src/models/db.js")
const express = require('express');
const app = express();
app.use(express.static("src"));
const PORT = process.env.PORT || 8000;
// global.__basedir = __dirname

const cors = require('cors')
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));

var bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

const userR = require("./src/router/UserRouter.js");
const travelR = require("./src/router/TravelRouter.js");
app.use('/api/user',userR);
app.use('/api/travel',travelR);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync();