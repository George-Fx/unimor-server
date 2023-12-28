const express = require('express');
const router = express.Router();

// MIDDLWARES //
const {ifUserExists} = require('../middlewares/ifUserExists.js');
const {hashPassword} = require('../middlewares/hashPassword.js');

// CONTROLLERS //
const {createUser} = require('../controllers/createUser.js');
const {loginUser} = require('../controllers/loginUser.js');
const {updateUser} = require('../controllers/updateUser.js');

// ROUTES //
router.post('/user/login', loginUser);
router.patch('/user/update/:id', updateUser);
router.post('/user/create', [ifUserExists, hashPassword], createUser);

module.exports = router;
