const db = require("../models/db.js");
const Location = db.location;
const Restaurant = db.restaurant;
const Shopping = db.shopping;
const Hotel = db.hotel;
const Sequelize = require("sequelize");
const Op = db.Sequelize.Op;


exports.getLocation = (req,res) =>{
    const LocationName = req.body.LocationName;
    Location.findAll({ where: {LocationName:LocationName} })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({message:err.message + "Some error occurred."})
      });
};

exports.getHotel = (req,res) =>{
  const HotelName = req.body.HotelName;
  Hotel.findAll({ where: {HotelName:HotelName} })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({message:err.message + "Some error occurred."})
    });
};

exports.getRestaurant = (req,res) =>{
  const RestaurantName = req.body.RestaurantName;
  Restaurant.findAll({ where: {RestaurantName:RestaurantName} })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({message:err.message + "Some error occurred."})
    });
};

exports.getShopping = (req,res) =>{
  const ShoppingName = req.body.ShoppingName;
  Shopping.findAll({ where: {ShoppingName:ShoppingName} })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({message:err.message + "Some error occurred."})
    });
};