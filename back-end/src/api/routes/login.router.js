const { Router } = require('express');
const userController = require('../controllers/user.controller');

const loginRouter = Router();

loginRouter.get('/', userController.getAllUsers);
loginRouter.post('/', userController.findByEmail);

module.exports = loginRouter;