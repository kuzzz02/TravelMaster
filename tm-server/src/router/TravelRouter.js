const travel = require("../controllers/TravelController");
var router = require("express").Router();

router.get("/locationName", travel.getLocation)
router.get("/hotelName",travel.getHotel)
router.get("/restaurantName",travel.getRestaurant)
router.get("/shoppingName",travel.getShopping)


module.exports = router;