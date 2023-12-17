const user = require("../controllers/UserController");
var router = require("express").Router();

router.post("/", user.create)
router.post("/name",user.getUser)
router.delete("/:id",user.delete)
router.put("/:id",user.update)

module.exports = router;