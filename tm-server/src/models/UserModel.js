module.exports = (sequelize,Sequelize) => {
    const User = sequelize.define("user",{
        username:{
            type: Sequelize.DataTypes.STRING
        },
        password:{
            type: Sequelize.DataTypes.STRING
        }
    },
    {
        timestamps: false,
        // freezeTableName: false
    });
    return User;
}