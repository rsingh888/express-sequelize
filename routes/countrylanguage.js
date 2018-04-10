var express = require('express');
var router = express.Router();
var countrylanguage = require('.././models/countrylanguage');
var models = require('.././models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var countrylanguage = models.countrylanguage;
  countrylanguage.findAll().then(countrylanguage => {
    res.send(countrylanguage);
  })  
});

router.get('/:id', function(req, res, next) {
  var countrylanguage = models.countrylanguage;
  countrylanguage.find({where: {city_id: req.params.id}}).then(countrylanguage => {
    res.send(countrylanguage);
  })
});

module.exports = router;