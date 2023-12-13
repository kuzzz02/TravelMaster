const { Sequelize } = require("../models/db.js");
const db = require("../models/db.js");
const Map = db.map;
// const Op = db.Sequelize.Op;

exports.Geocoding = (req,res) =>{
    const geocoding = req.body.geocoding;
    Map.findAll({ where: {geocoding:geocoding} })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving materials."
        });
      });
};

exports.routePlanning = (req,res) =>{
    const route = req.body.route;
    Map.findAll({ where: {route:route} })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving materials."
        });
      });
};

exports.searchService = (req,res) =>{
    const search = req.body.search;
    Map.findAll({ where: {search:search} })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving materials."
        });
      });
};
exports.getIP = (req,res) =>{
    const ip = req.body.ip;
    Map.findAll({ where: {ip:ip} })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving materials."
        });
      });
};
exports.getMap = (req,res) =>{
    const map = req.body.map;
    Map.findAll({ where: {map:map} })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving materials."
        });
      });
};
exports.IpTransform = (req,res) =>{
    const iptrans = req.body.iptrans;
    Map.findAll({ where: {iptrans:iptrans} })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving materials."
        });
      });
};
exports.getWeather = (req,res) =>{
    const weather = req.body.weather;
    Map.findAll({ where: {weather:weather} })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving materials."
        });
      });
};
exports.InputPrompt = (req,res) =>{
    const input = req.body.input;
    Map.findAll({ where: {input:input} })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving materials."
        });
      });
};