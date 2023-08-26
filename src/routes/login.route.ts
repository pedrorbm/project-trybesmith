import express from 'express';
import loginController from '../controllers/login.controller';
import verifyLogin from '../middlewares/verifyLogin';

const route = express.Router();

route.post('/', verifyLogin, loginController.findUser);

export default route;
