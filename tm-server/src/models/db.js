const Sequelize= require("sequelize");
exports.sequelize = new Sequelize("tmdb","tm","tm123",{
    host:"localhost",
    dialect:"mysql",
    logging:console.log
});


const db = {};
db.map = require("./MapModel");
db.user = require("./UserModel");


module.exports = db;

// create database tmdb;
// grant all on tmdb.* to 'tm'@'%';
// create user 'tm'@'%' identified by 'tm123';