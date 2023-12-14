const user = require("../controllers/UserController");
var router = require("express").Router();

router.post("/", user.create); //TODO
router.delete("/:id",user.delete)
router.put("/:id",user.update)
router.get("/",user.getUser) //TODO

module.exports = router;