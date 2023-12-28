const User = require('../models/user.js'); // Предполагается, что у вас есть модель User

const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id; // Получаем ID пользователя из параметров запроса
    const updateData = req.body; // Получаем данные для обновления из тела запроса

    // Найти пользователя по ID и обновить его
    const user = await User.findByIdAndUpdate(userId, updateData, {new: true});

    if (!user) {
      return res.status(404).json({error: 'User not found'});
    }

    // Если все прошло успешно, возвращаем обновленного пользователя
    res.status(200).json({user});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
};

module.exports = {updateUser};
