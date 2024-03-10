const connection = require("../config/dbconfig");


class LoginService {

    userLogin (username, password , callback){

        connection.query('SELECT * FROM USERS WHERE email = ? AND password = ?', [username , password], (err , result)=>{
            if(err){
                callback({
                    success:false,
                    message:'Internal Server Error'
                });
            }
            if(result.length > 0){
                callback({
                    success: true,
                    message:'Login Success'
                })  
            }
            else{
                callback({
                    success:false,
                    message:'Invalid Username And Password'
                })
            }

        });


    }

}

module.exports = new LoginService;