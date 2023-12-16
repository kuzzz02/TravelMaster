const Sequelize= require("sequelize");
const sequelize = require("./dbconfig");
const map = require("./MapModel")(sequelize,Sequelize);
const user = require("./UserModel")(sequelize,Sequelize);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.map = map;
db.user = user;


module.exports = db;