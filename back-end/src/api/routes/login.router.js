const { Router } = require('express');
const userController = require('../controllers/user.controller');
const validationRequisiton = require('../middlewares/validation.middleware');

const loginRouter = Router();

loginRouter.get('/', userController.getAllUsers);
loginRouter.post('/', validationRequisiton, userController.findByEmail);

module.exports = loginRouter;