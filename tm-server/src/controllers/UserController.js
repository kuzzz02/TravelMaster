const db = require("../models/db.js");
const User = db.user;


exports.create = (req,res) =>{
    if (!req.body.username) {
        res.status(400).send({
          message: "EMPTY INPUT!"
        });
        return;
    }
    
    const user = {
        username: req.body.username,
        password: req.body.password
    };

    User.create(user)
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({message:err.message + "Some error occurred."})
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
        res.status(500).send({message:err.message + "Some error occurred."})
    })
};

exports.update = (req,res) =>{
    const id = req.params.id;
    User.update(req.body,{
        where:{id:id}
    })
    .then(num =>{
        if(num == 1){
            res.send({message:"You update a user!"})
        }
        else{
            res.send({message:"INVALID UPDATE"})
        }
        
    })
    .catch(err =>{
        res.status(500).send({message:err.message + "Some error occurred."})
    })
};

exports.getUser = (req,res) =>{
    const name = req.body.username;
    var condition = { name: name } 
    User.findAll({ where: condition })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({message:err.message + "Some error occurred."});
      });
};