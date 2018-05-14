'use-strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const orderStatusSchema = new Schema({
  action: {
    type: String
  },
  status: {
    type: Boolean
  },
  role: {
    type: String
  }
},
{
  _id: false
});

const orderSchema = new Schema({
  product: {
    type: ObjectId,
    ref: 'Product',
    required: true
  },
  brandId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  supplierId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  orderStatus: {
    type: [orderStatusSchema],
    default: [{
      action: 'open-order',
      status: true,
      role: 'brand'
    }, {
      action: 'complete-model',
      status: false,
      role: 'supplier'
    }, {
      action: 'accept-model', // allow reject - circle back to 'complete 3D model',
      status: false,
      role: 'brand'
    }, {
      action: 'sample-subsupplier-receive',
      status: false,
      role: 'supplier'
    }, {
      action: 'sample-assemble',
      status: false,
      role: 'supplier'
    }, {
      action: 'sample-ship-client',
      status: false,
      role: 'supplier'
    }, {
      action: 'sample-approve', // allow reject - circle back to 'confirm sub-supplier shipments for samples',
      status: false,
      role: 'brand'
    }, {
      action: 'pre-prod',
      status: false,
      role: 'supplier'
    }, {
      action: 'full-batch-subsupplier-receive',
      status: false,
      role: 'supplier'
    }, {
      action: 'full-batch-assemble',
      status: false,
      role: 'supplier'
    }, {
      action: 'full-batch-ship-client',
      status: false,
      role: 'supplier'
    }, {
      action: 'full-batch-accept', // allow reject - circle back to 'confirm sub-supplier shipments for full batch',
      status: false,
      role: 'brand'
    }]
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
