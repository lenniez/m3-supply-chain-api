'use-strict';

const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const mongoose = require('mongoose');

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

// change back to a post later
router.put('/step/:stepId', (req, res, next) => {
  // This is to allow the update page to refresh with the new db data without refreshing the page
  const options = {
    'new': true
  };

  // if there is no step with this id
  if (!mongoose.Types.ObjectId.isValid(req.params.stepId)) {
    return res.status(422).json({ code: 'unprocessable-entity' });
  }

  Order.findOne({ orderStatus: { $elemMatch: { _id: req.params.stepId } } })
    .then((result) => {
      if (!result) {
        return res.status(404).json({ code: 'not-found' });
      }

      // find first step in orderStatus array that has a status === false
      const nextStep = result.orderStatus.find((step) => {
        return step.status === false;
      });

      // set next step's value to true (completed)
      nextStep.status = true;

      // save updated order
      result.save()
        .then(() => {
          // console.log(result);
          res.json(result);
        });
    })
    .catch(next);
});

module.exports = router;
