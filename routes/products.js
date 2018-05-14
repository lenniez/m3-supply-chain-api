'use-strict';

var express = require('express');
var router = express.Router();
const Product = require('../models/product');

router.get('/', (req, res, next) => {
  Product.find({})
    .then((result) => {
      res.json(result);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch(next);
});

module.exports = router;
