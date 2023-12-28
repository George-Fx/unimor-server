const bcrypt = require('bcrypt');

const hashPassword = async (req, res, next) => {
  try {
    const {password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    req.body.password = hash;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Error while hashing password'});
  }
};

module.exports = {hashPassword};
