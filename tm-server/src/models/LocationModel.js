module.exports = (sequelize,Sequelize) => {
    const Location = sequelize.define("location",{
        LocationName:{
            type: Sequelize.STRING,
            primaryKey:true
        },
        LocationDescription:{
            type: Sequelize.STRING
        }
    });
    return Location;
}