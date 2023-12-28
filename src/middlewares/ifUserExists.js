const User = require('../models/user.js');

const ifUserExists = async (req, res, next) => {
  try {
    const {userName, email} = req.body;
    const user = await User.findOne({$or: [{userName}, {email}]});
    if (user !== null) {
      return res.status(400).json({error: 'User name or email already exists'});
    }
    next();
  } catch (error) {
    console.error(error);
    next();
  }
};

module.exports = {ifUserExists};
