const db = require('./src/models/db.js');
const mapR = require('./src/router/MapRouter.js');
const userR = require('./src/router/UserRouter.js');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors')
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));

app.use(mapR)
app.use(userR)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
// db.sequelize.sync();