const db = require("../models/db.js");
const Location = db.location;
const Restaurant = db.restaurant;
const Shopping = db.shopping;
const Hotel = db.hotel;

const Sequelize = require("sequelize");
const Op = db.Sequelize.Op;
const fs = require("fs")


exports.getLocation = (req,res) =>{
    const LocationName = req.params.LocationName;
    Location.findAll({ where: {LocationName:LocationName} })
      .then(data => {
        // const dataPath = __basedir + `/data/${LocationName}`;
        // for(let i=0;i<data.length;i++){
        //   let fileName = data[i].dataValues.LocationImage_Name;
        //   let imageData = fs.readFileSync(dataPath + fileName);
        //   let base64Data = Buffer.from(imageData, 'binary').toString('base64');
        //   data[i].dataValues.LocationImage="data:image/png;base64,"+base64Data;
        // }
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({message:err.message + "Some error occurred."})
      });
};

exports.getHotel = (req,res) =>{
  const HotelName = req.params.HotelName;
  Hotel.findAll({ where: {HotelName:HotelName} })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({message:err.message + "Some error occurred."})
    });
};

exports.getRestaurant = (req,res) =>{
  const RestaurantName = req.params.RestaurantName;
  Restaurant.findAll({ where: {RestaurantName:RestaurantName} })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({message:err.message + "Some error occurred."})
    });
};

exports.getShopping = (req,res) =>{
  const ShoppingName = req.params.ShoppingName;
  Shopping.findAll({ where: {ShoppingName:ShoppingName} })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({message:err.message + "Some error occurred."})
    });
};


exports.getByKey = (req,res) =>{
  var key = req.body.key;
  var keys=[]
  for(let i=0;i<key.length;i++){
    keys.push({orderlist: { [Op.like]: Sequelize.literal(`'%${key[i]}%'`) }}) //TODO
  }
  var condition = { [Op.or]:[keys] };
  Restaurant.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({message:err.message + "Some error occurred."})
    });
};