const signUpService = require('../services/SignUpService');

class SignUpController {
    
  signUp(req, res) {
    const newUser = req.body;
    signUpService.signUp(newUser, (addedUser) => {
      res.status(200).json(addedUser);
    });
  }
}

module.exports = new SignUpController();
