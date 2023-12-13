module.exports = app => {
    const user = require("../controllers/UserController");
    var router = require("express").Router();

    router.post("/", user.create);
    router.delete("/:id",user.delete)
    router.put("/:id",user.update)
    router.get("/",user.getUser)
    app.use('/api/user', router);
  };