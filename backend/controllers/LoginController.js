const LoginService = require("../services/LoginService");


class LoginController{

    loginUser(req, res){
        const {username , password} = req.body;
        LoginService.userLogin(username , password , (callback)=>{
            res.status(200).json(callback);
        })
    }
}

module.exports = new LoginController;