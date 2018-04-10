var express = require('express');
var router = express.Router();
var city = require('.././models/city');
var models = require('.././models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var city = models.city;
  city.findAll().then(city => {
    res.send(city);
  })  
});

router.get('/:id', function(req, res, next) {
  var city = models.city;
  city.find({where: {city_id: req.params.id}}).then(city => {
    res.send(city);
  })
});

module.exports = router;