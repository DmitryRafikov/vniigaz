const ApiError = require("../error/apiError");
const dotenv = require('dotenv');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserService = require("../models/services/implementations/OrganizationService");

generateToken = (id, login, role)=>{
    return jwt.sign(
        {id, login, role}, 
        process.env.JWT_SECRET,
        {expiresIn: '24h'});
}

class UserController
{
        
    async registration(req, res){
    }

    async login(req, res, next){
        const {login, password} = req.body;
        if(!login ||!password)
        {
            next(ApiError.badRequest('Не указаны логин и пароль'));
        }
        const user = await UserService.getOrganizationByLogin(login);
        if(!user)
        {
            next(ApiError.badRequest('Логин или пароль не верны'));
        }
        const hash = user.password;
        const isPasswordCorrect = await bcrypt.compare(password, hash);
        if(isPasswordCorrect)// !
        {
            next(ApiError.badRequest('Логин или пароль не верны'));
        }
        const token = generateToken(user.id, user.login, user.role);
        res.json({token});
    }

    async checkAuth(req, res){
        const {user} = req.user;
        const token = generateToken(user);
        res.json({token});
    }
}

module.exports = new UserController();