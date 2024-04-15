const { Router } = require('express');
const { signupValidator, validate, loginValidator } = require('../utils/validators');
const { userSignup, userLogin } = require('../controllers/userController');


const userRoutes = Router();

userRoutes.post('/signup', validate(signupValidator), userSignup);
userRoutes.post('/login', validate(loginValidator), userLogin);

module.exports = userRoutes;