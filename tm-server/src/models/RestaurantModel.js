module.exports = (sequelize,Sequelize) => {
    const Restaurant = sequelize.define("restaurants",{
        RestaurantName:{
            type: Sequelize.DataTypes.STRING,
            primaryKey:true
        },
        Description:{
            type: Sequelize.DataTypes.STRING
        },
        Star:{
            type: Sequelize.DataTypes.INTEGER
        },
        Website:{
            type: Sequelize.DataTypes.STRING
        },
        Phone:{
            type: Sequelize.DataTypes.STRING
        },
        Price:{
            type: Sequelize.DataTypes.STRING
        },
        Image:{
            type: Sequelize.DataTypes.STRING
        },
        Image_Name:{
            type: Sequelize.DataTypes.STRING
        }
    });
    return Restaurant;
}