var express = require('express');
var router = express.Router();
var actors = require('.././models/actor');
var models = require('.././models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var cities = models.city;
  cities.findAll().then(cities => {
    res.send(cities);
  })
  
  // res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  var cities = models.city;
  cities.find({where: {city_id: req.params.id}}).then(cities => {
    console.log(cities);
    res.send(cities);
  })
  
  // res.send('respond with a resource');
});

module.exports = router;
