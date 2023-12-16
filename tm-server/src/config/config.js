const Sequelize= require("sequelize");
const sequelize = new Sequelize("tmdb","tm","tm123",{
    host:"localhost",
    dialect:"mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging:console.log
});

module.exports = sequelize;

// create database tmdb;
// grant all on tmdb.* to 'tm'@'%';
// create user 'tm'@'%' identified by 'tm123';