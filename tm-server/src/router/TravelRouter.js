const travel = require("../controllers/TravelController");
var router = require("express").Router();

router.post("/locationName", travel.getLocation)
router.post("/hotelName",travel.getHotel)
router.post("/restaurantName",travel.getRestaurant)
router.post("/shoppingName",travel.getShopping)


module.exports = router;