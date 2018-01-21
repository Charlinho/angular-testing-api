const express = require('express'),
  router = express.Router();

userController = require('./../controllers/user.controller');

router.get('/users', userController.getUsers);

module.exports = router;