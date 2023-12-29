const db = require("./src/models/db.js")
const express = require('express');
const app = express();
app.use(express.static("src"));

const cors = require('cors')
app.use(cors({origin:"*"}));

var bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

const userR = require("./src/router/UserRouter.js");
const travelR = require("./src/router/TravelRouter.js");
app.use('/api/user',userR);
app.use('/api/travel',travelR);


app.listen(8000, () => {
  console.log(`Server is running on port http://localhost:8000`)
});

db.sequelize.sync();