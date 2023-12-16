module.exports = (sequelize,Sequelize) => {
    const Location = sequelize.define("location",{
        LocationName:{
            type: Sequelize.DataTypes.STRING,
            primaryKey:true
        },
        LocationDescription:{
            type: Sequelize.DataTypes.STRING
        },
        LocationImage:{
            type: Sequelize.DataTypes.STRING
        },
        LocationImage_Name:{
            type: Sequelize.DataTypes.STRING
        },
        ToDoImage:{
            type: Sequelize.DataTypes.STRING
        },
        ToDoImage_Name:{
            type: Sequelize.DataTypes.STRING
        }
    });
    return Location;
}