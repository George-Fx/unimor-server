const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js'); // Предполагается, что у вас есть модель User

const loginUser = async (req, res, next) => {
  try {
    // Найти пользователя по имени пользователя
    const user = await User.findOne({userName: req.body.userName});
    if (!user) {
      throw new Error('User not found');
    }

    // Проверить пароль
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      throw new Error('Invalid password');
    }

    // Создать токен
    const token = jwt.sign({id: user._id}, 'your_jwt_secret', {expiresIn: '1h'});

    // Если все проверки прошли успешно,
    // возвращаем пользователя и токен со статусом 200
    res.status(200).json({user, token});
  } catch (error) {
    console.error(error);
    res.status(400).json({error: error.message});
  }
};

module.exports = {loginUser};
