const db = require("../models/db.js");
const User = db.user;

exports.create = (req,res) =>{
    const user = {
        username: req.body.name,
        password: req.body.password
    };

    User.create(user)
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({message:err.message + "ERROR"})
    });
};

exports.delete = (req,res) =>{
    const id = req.params.id;
    User.destroy({
        where:{id:id}
    })
    .then(num =>{
        if(num == 1){
            res.send({message:"You delete a user!"})
        }
        else{
            res.send({message:"INVALID DELETE"})
        }
        
    })
    .catch(err =>{
        res.status(500).send({message:err.message + "ERROR"})
    })
};

exports.update = (req,res) =>{
    const id = req.params.id;
    User.destroy({
        where:{id:id}
    })
    .then(num =>{
        if(num == 1){
            res.send({message:"You delete a user!"})
        }
        else{
            res.send({message:"INVALID DELETE"})
        }
        
    })
    .catch(err =>{
        res.status(500).send({message:err.message + "ERROR"})
    })
};

exports.getUser = (req,res) =>{
    const name = req.params.name;
    var condition = { name: name } 
    Goods.findAll({ where: condition })
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