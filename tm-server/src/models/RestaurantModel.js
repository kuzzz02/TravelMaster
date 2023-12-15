module.exports = (sequelize,Sequelize) => {
    const Restaurant = sequelize.define("restaurants",{
        RestaurantName:{
            type: Sequelize.STRING,
            primaryKey:true
        },
        RestaurantDescription:{
            type: Sequelize.STRING
        },
        RestaurantStar:{
            type: Sequelize.BIGINT
        },
        Website:{
            type: Sequelize.STRING
        },
        Phone:{
            type: Sequelize.STRING
        },
        LocationName:{
            type: Sequelize.STRING
        },
    });
    return Restaurant;
}