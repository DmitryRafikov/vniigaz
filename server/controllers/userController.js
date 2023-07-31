const ApiError = require("../error/apiError");
const dotenv = require('dotenv');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserService = require("../models/services/implementations/OrganizationService");
class UserController
{
    generateToken(user){
        return jwt.sign({id: user.id, login, role}, process.env.JWT_SECRET);
    }
    async registration(req, res){
    }

    async login(req, res, next){
        const {login, password} = req.body;
        if(!login ||!password)
        {
            next(ApiError.badRequest('Не указаны логин и пароль'));
        }
        const user = await UserService.getUserByLogin(login);
        if(!user)
        {
            next(ApiError.badRequest('Логин или пароль не верны'));
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect)
        {
            next(ApiError.badRequest('Логин или пароль не верны'));
        }
        const token = generateToken(user);
        res.json({token});
    }

    async checkAuth(req, res){
        const {user} = req.user;
        const token = generateToken(user);
        res.json({token});
    }
}

module.exports = new UserController();