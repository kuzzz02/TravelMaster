const Sequelize= require("sequelize");
const sequelize = new Sequelize("tmdb","tm","tm123",{
    host:"localhost",
    dialect:"mysql",
    logging:console.log
});

module.exports = sequelize;

// create database tmdb;
// grant all on tmdb.* to 'tm'@'%';
// create user 'tm'@'%' identified by 'tm123';