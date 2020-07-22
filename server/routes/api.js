const express = require("express");
const router = express.Router();
const rp = require("request-promise");
const APIkey = "5fd38065a17fc3762e1debc8d821da57";
const City = require("../models/city");

router.get("/city/:cityName", function(req, res) {
  let { cityName } = req.params;
  rp({
    uri: "https://api.openweathermap.org/data/2.5/weather",
    qs: {
      q: cityName,
      appid: APIkey,
      // units: metric
    },
    json: true
  }).then(data => {
    let newData ={
      name: data.name,
      temperature: Math.floor((data.main.temp) - 273.15),
      condition: data.weather[0].description,
      conditionPic: data.weather[0].icon
    };
    res.send(newData);
  });
});

router.get("/cities", function(req, res) {
  City.find({}, function(err, cities) {
    res.send(cities);
  });
});

router.post("/city", function(req, res) {
  let city = req.body;
  city = new City(city)
  city.save().then(city => res.send(city));
});

router.delete("/city/:cityName", function(req, res) {
  City.findOneAndDelete({ name: req.params.cityName }, function(err, city) {
    res.send(`deleted: ${req.params.cityName}`);
  });
});

module.exports = router;
