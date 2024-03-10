const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/SignUpController');

router.post('/signup', signUpController.signUp);

module.exports = router;
