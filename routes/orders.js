'use-strict';

var express = require('express');
var router = express.Router();
const Order = require('../models/order');

router.get('/:userId', (req, res, next) => {
// Find and send all orders where either the supplier or brand ids match that of the signed in user

  Order.find({ $or: [{ 'brandId': req.params.userId }, { 'supplierId': req.params.userId }] })
    .then((result) => {
      res.json(result);
    })
    .catch(next);
});

router.post('/placeorder', (req, res, next) => {
  // Pass product id, brand id, and supplier id into new Order
  const productId = req.body.productId;
  const brandId = req.body.brandId;
  const supplierId = req.body.supplierId;

  const newData = {
    productId,
    brandId,
    supplierId
  };

  const newOrder = new Order(newData);

  // Save new Order
  newOrder.save()
    .then((result) => {
      res.status(201).json({ code: 'order created' });
    })
    .catch(next);
});

module.exports = router;
