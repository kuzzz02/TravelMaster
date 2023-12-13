module.exports = app => {
    const map = require("../controllers/MapController");
    var router = require("express").Router();

    router.get("/:geocoding", map.Geocoding);
    router.get("/:route",map.routePlanning)
    router.get("/:search",map.searchService)
    router.get("/:ip",map.getIP)
    router.get("/:map",map.getMap)
    router.get("/:iptrans",map.IpTransform)
    router.get("/:weather",map.getWeather)
    router.get("/:input",map.InputPrompt)
    app.use('/api/map', router);
  };