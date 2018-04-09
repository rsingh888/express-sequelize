var express = require('express');
var router = express.Router();
var country = require('.././models/country');
var models = require('.././models');

/* GET users listing. */
router.get('/', function(req, res, next) {
var country = models.country;
country.findAll().then(country => {
res.send(country);
}) 
});

router.get('/:id', function(req, res, next) {
var country = models.country;
country.find({where: {country_id: req.params.id}}).then(country => {
res.send(country);
})
});

module.exports = router;