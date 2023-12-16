module.exports = (sequelize,Sequelize) => {
    const Shopping = sequelize.define("shoppings",{
        ShoppingName:{
            type: Sequelize.STRING,
            primaryKey:true
        },
        ShoppingDescription:{
            type: Sequelize.STRING
        },
        ShoppingStar:{
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
    return Shopping;
}