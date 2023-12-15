const db = require("../models/db.js");
const Location = db.location;
const Restaurant = db.restaurant;
const Shopping = db.shopping;
const Hotel = db.hotel;

const Sequelize = require("sequelize");
const Op = db.Sequelize.Op;
const fs = require("fs")


//TODO: update files + complete more requirements
exports.searchService = (req,res) =>{
    const search = req.params.search;
    Location.findAll({ where: {search:search} })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({message:err.message + "Some error occurred."})
      });
};

exports.getIP = (req,res) =>{
    const ip = req.params.ip;
    Location.findAll({ where: {ip:ip} })
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