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

module.exports = router;
