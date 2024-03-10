const EmailSendingService = require("../services/EmailSendingService");


class EmailSendingController {
        sendingEmail(req, res){
            const emailDetails = req.body;

            EmailSendingService.emailSending(emailDetails , (callback)=>{
                res.status(201).json({callback});
            })
        }
}

module.exports = new EmailSendingController;