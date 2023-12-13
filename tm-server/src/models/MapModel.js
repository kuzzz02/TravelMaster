const Sequelize = require("sequelize");
const db = require("./db")

// module.exports = (sequelize,Sequelize) => {
//     const Map = sequelize.define("map",{
//         geocoding:{
//             type: Sequelize.STRING
//         },
//         route:{
//             type: Sequelize.STRING
//         },
//         search:{
//             type: Sequelize.STRING
//         },
//         ip:{
//             type: Sequelize.STRING
//         },
//         map:{
//             type: Sequelize.STRING
//         },
//         iptrans:{
//             type: Sequelize.STRING
//         },
//         weather:{
//             type: Sequelize.STRING
//         },
//         input:{
//             type: Sequelize.STRING
//         },
//     });
//     return Map;
// };

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