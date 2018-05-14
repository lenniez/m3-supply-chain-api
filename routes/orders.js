'use-strict';

var express = require('express');
var router = express.Router();
const Order = require('../models/order');

router.post('/placeorder', (req, res, next) => {
  const product = req.body.product;
  const brandId = req.body.brandId;
  const supplierId = req.body.supplierId;

  const newData = {
    product,
    brandId,
    supplierId
  };

  const newOrder = new Order(newData);

  newOrder.save()
    .then((result) => {
      res.status(201).json({ code: 'order created' });
    })
    .catch(next);
});

module.exports = router;
