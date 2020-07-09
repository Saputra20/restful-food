var express = require('express');
var router = express.Router();
var models = require('../models/index')

/* GET users listing. */
router.get('/traditional', function(req, res, next) {
  models.Foods.findAll({
    where:{
      status : 1
    }
  }).then(foods => {
    res.json({
      status:200,
      foods: foods
    })
  }).catch(err => console.log(err));
});

router.get('/international', function(req, res, next) {
  models.Foods.findAll({
    where:{
      status : 2
    }
  }).then(foods => {
    res.json({
      status:200,
      foods: foods
    })
  }).catch(err => console.log(err));
});

router.get('/:id', function(req, res, next) {
  models.Foods.findAll({
    where:{
      id : req.params.id
    }
  }).then(food => {
    res.json({
      status:200,
      food: food
    })
  }).catch(err => console.log(err));
});

module.exports = router;
