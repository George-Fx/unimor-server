const User = require('../models/user.js');

const createUser = async (req, res, next) => {
  try {
    const {userName, email, password, phoneNumber} = req.body;

    const user = new User({userName, email, password, phoneNumber});

    await user.save();

    res.status(200).json({
      status: 'success',
      message: 'User created',
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred while creating the user',
    });
  }
};

module.exports = {createUser};
