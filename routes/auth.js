'use-strict';

const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../models/user');

router.get('/me', (req, res, next) => {
  if (req.session.currentUser) {
    User.findById(req.session.currentUser._id)
      .then((result) => {
        // if (!result) {
        //   req.session.currentUser = null;
        //   return res.status(404).json({ code: 'not-found' });
        // }
        res.json(req.session.currentUser);
      });
  } else {
    res.status(404).json({ code: 'not-found' });
  }
});

router.post('/login', (req, res, next) => {
  if (req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }

  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(422).json({ code: 'validation' });
  }

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ code: 'not-found' });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(404).json({ code: 'not-found' });
      }
      req.session.currentUser = user;
      return res.json(user);
    })
    .catch(next);
});

router.post('/signup', (req, res, next) => {
  if (req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;

  if (!username || !password || !role || !email) {
    return res.status(422).json({ code: 'validation' });
  }

  User.findOne({ username }, 'username')
    .then((userExists) => {
      if (userExists) {
        return res.status(422).json({ code: 'username-not-unique' });
      }

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = User({
        username,
        email,
        password: hashPass,
        role
      });

      return newUser.save()
        .then(() => {
          req.session.currentUser = newUser;
          res.json(newUser);
        });
    })
    .catch(next);
});

router.post('/logout', (req, res) => {
  req.session.currentUser = null;
  return res.status(204).json({code: 'ok'});
});

module.exports = router;
