const Sequelize= require("sequelize");
const sequelize = require("../config/config");

const user = require("./UserModel")(sequelize,Sequelize);
const location = require("./LocationModel")(sequelize,Sequelize);
const restaurant = require("./RestaurantModel")(sequelize,Sequelize);
const shopping = require("./ShoppingModel")(sequelize,Sequelize);
const hotel = require("./HotelModel")(sequelize,Sequelize);

location.hasMany(restaurant,{
    foreignKey: 'LocationName'
});
restaurant.belongsTo(location);
location.hasMany(shopping,{
    foreignKey: 'LocationName'
});
shopping.belongsTo(location);
location.hasMany(hotel,{
    foreignKey: 'LocationName'
});
hotel.belongsTo(location);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = user;
db.location = location;
db.restaurant = restaurant;
db.shopping = shopping;
db.hotel = hotel;


module.exports = db;