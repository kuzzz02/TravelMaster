module.exports = (sequelize,Sequelize) => {
    const Hotel = sequelize.define("hotels",{
        HotelName:{
            type: Sequelize.STRING,
            primaryKey:true
        },
        HotelDescription:{
            type: Sequelize.STRING
        },
        HotelStar:{
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
    return Hotel;
}