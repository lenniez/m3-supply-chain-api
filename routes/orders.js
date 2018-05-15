'use-strict';

const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.get('/:userId', (req, res, next) => {
// Find and send all orders where either the supplier or brand ids match that of the signed in user

  Order.find({ $or: [{ 'brand': req.params.userId }, { 'supplier': req.params.userId }] })
    .populate('product supplier brand')
    .then((result) => {
      res.json(result);
    })
    .catch(next);
});

router.post('/placeorder', (req, res, next) => {
  // Pass product id, brand id, and supplier id into new Order
  const product = req.body.product;
  const brand = req.body.brand;
  const supplier = req.body.supplier;

  const newData = {
    product,
    brand,
    supplier
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
