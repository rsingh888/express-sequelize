var express = require('express');
var router = express.Router();
var actors = require('.././models/actor');
var models = require('.././models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var actors = models.actor;
  actors.findAll().then(actors => {
    res.send(actors);
  })
  
  // res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  var actors = models.actor;
  actors.find({where: {actor_id: req.params.id}}).then(actors => {
    console.log(actors);
    res.send(actors);
  })
  
  // res.send('respond with a resource');
});

module.exports = router;
