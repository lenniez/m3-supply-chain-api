'use-strict';

const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();

const index = require('./routes/index');
const auth = require('./routes/auth');
const categories = require('./routes/categories');
const suppliers = require('./routes/suppliers');
const products = require('./routes/products');
const orders = require('./routes/orders');

// configure the app
const app = express();

// set up mongo
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

// middlewares
app.use(cors({
  credentials: true,
  origin: [process.env.CLIENT_URL]
}));

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  }),
  secret: 'some-string',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use(function (req, res, next) {
  app.locals.user = req.session.currentUser;
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/', index);
app.use('/auth', auth);
app.use('/categories', categories);
app.use('/suppliers', suppliers);
app.use('/products', products);
app.use('/orders', orders);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ code: 'not-found' });
});

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500).json({ code: 'unexpected' });
  }
});

module.exports = app;
