'use-strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user');
const Product = require('../models/product');
const Order = require('../models/order');

const allSuppliers = require('./suppliers-seed');
const allBrands = require('./brands-seed');

mongoose.Promise = Promise;
// web v. local db connection options - only one should be uncommented at a time
// mongoose.connect('mongodb://lennie:lennie@ds229909.mlab.com:29909/supply-chain-db', {
mongoose.connect('mongodb://localhost/supply-chain-db', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

// -- utility functions

function createOneProduct (data) {
  const product = new Product(data);
  return product.save();
}

function createProducts (products) {
  const promises = products.map(createOneProduct);
  return Promise.all(promises);
}

function createOneSupplier (supplier) {
  const salt = bcrypt.genSaltSync(10);

  const user = new User(supplier.user);
  user.password = bcrypt.hashSync(supplier.user.password, salt);
  return user.save()
    .then(() => {
      supplier.products.forEach(product => {
        product.supplier = user._id;
      });
    });
}

function createSuppliers (suppliers) {
  const promises = suppliers.map(createOneSupplier);
  return Promise.all(promises);
}

function createOneBrand (brand) {
  const salt = bcrypt.genSaltSync(10);

  const user = new User(brand);
  user.password = bcrypt.hashSync(brand.password, salt);
  // console.log(user);
  return user.save();
}

function createBrands (brands) {
  const promises = brands.map(createOneBrand);
  return Promise.all(promises);
}

// -- main

const deleteProducts = Product.remove();
const deleteUsers = User.remove();
const deleteOrders = Order.remove();

Promise.all([deleteProducts, deleteUsers, deleteOrders])
  // create seed brand users
  .then(() => createBrands(allBrands))
  // create seed supplier users and products
  .then(() => createSuppliers(allSuppliers))
  .then(() => allSuppliers.reduce((acc, item) => {
    // reduce to a single array of products
    return acc.concat(item.products);
  }, []))
  .then((products) => createProducts(products))
  .then(() => mongoose.disconnect())
  .catch((err) => {
    console.log(err);
    mongoose.disconnect();
  });
