const db = require("../models/db.js");
const Map = db.map;

exports.Geocoding = (req,res) =>{
    const geocoding = req.params.geocoding;
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
    const route = req.params.route;
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
    const search = req.params.search;
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
    const ip = req.params.ip;
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
    const map = req.params.map;
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
    const iptrans = req.params.iptrans;
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
    const weather = req.params.weather;
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
    const input = req.params.input;
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