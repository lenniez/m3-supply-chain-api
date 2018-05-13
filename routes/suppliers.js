'use-strict';

var express = require('express');
var router = express.Router();
const User = require('../models/user');

// routes
router.get('/', (req, res, next) => {
  User.find({role: 'supplier'})
    .then((result) => {
      res.json(result);
    })
    .catch(next);
});

module.exports = router;
