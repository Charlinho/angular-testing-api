const Users = require('../models/user');

module.exports = {
  getUsers: (req, res, next) => {
    return res.send(Users);
  }
}