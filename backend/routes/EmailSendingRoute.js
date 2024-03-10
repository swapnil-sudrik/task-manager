const express = require('express');
const EmailSendingController = require('../controllers/EmailSendingController');
const router = express.Router();

router.post('/send-otp', EmailSendingController.sendingEmail);

module.exports = router;

