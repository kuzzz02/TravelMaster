const Sequelize= require("sequelize");
exports.sequelize = new Sequelize("tm-db","root","tm123",{
    host:"localhost",
    dialect:"mysql",
    logging:console.log
});


const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
db.map = require("./MapModel");
db.user = require("./UserModel");


module.exports = db;