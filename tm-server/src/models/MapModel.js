const Sequelize = require("sequelize");
const db = require("./db")

const Map = db.sequelize.define("map",{
    geocoding:{
        type: Sequelize.STRING
    },
    route:{
        type: Sequelize.STRING
    },
    search:{
        type: Sequelize.STRING
    },
    ip:{
        type: Sequelize.STRING
    },
    map:{
        type: Sequelize.STRING
    },
    iptrans:{
        type: Sequelize.STRING
    },
    weather:{
        type: Sequelize.STRING
    },
    input:{
        type: Sequelize.STRING
    },
});

module.exports = Map;