const Sequelize = require("sequelize");
const db = require("./db")

// export default (sequelize,Sequelize) => {
//     const User = sequelize.define("user",{
//         username:{
//             type: Sequelize.STRING
//         },
//         password:{
//             type: Sequelize.STRING
//         }
//     });
//     return User;
// };

const User = db.sequelize.define("user",{
    username:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    }
});

module.exports = User;