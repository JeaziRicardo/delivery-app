const { Router } = require('express');
const userController = require('../controllers/user.controller');
const validationRequisiton = require('../middlewares/validation.middleware');

const registerRouter = Router();

registerRouter.post('/', validationRequisiton, userController.create);
module.exports = registerRouter;