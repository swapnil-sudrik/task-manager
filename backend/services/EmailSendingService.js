const nodemailer = require('nodemailer');
const connection = require('../config/dbconfig');

class EmailSendingService {
  // Generate a random 4-digit OTP 
  generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  emailSending(emailDetails, callback) {

    // Email credentials (replace with your email provider's details)
    const emailConfig = {
      service: 'gmail',
      auth: {
        user: 'addmytask@gmail.com',
        pass: 'epdmxzssconqsirm'
      }
    };

    const transporter = nodemailer.createTransport(emailConfig);

    const otp = this.generateOTP();
    const currentDate = new Date();

    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

    const emailResponse = `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body
    style="
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #ffffff;
      font-size: 14px;
    "
  >
    <div
      style="
        max-width: 680px;
        margin: 0 auto;
        padding: 45px 30px 60px;
        background: #f4f7ff;
        background-image: url(https://t4.ftcdn.net/jpg/06/90/88/35/360_F_690883544_s09SQrTD5LtrwFm4WFHyAi2Q0CTRXHrj.jpg);
        background-repeat: no-repeat;
        background-size: 800px 452px;
        background-position: top center;
        font-size: 14px;
        color: #434343;
      "
    >
      <header>
        <table style="width: 100%;">
          <tbody>
            <tr style="height: 0;">
              <td>
                <h1 style="color: #fff;">Task Manager</h1>
              </td>
              <td style="text-align: right;">
                <span
                  style="font-size: 16px; line-height: 30px; color: #ffffff;"
                  >${formattedDate}</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </header>

      <main>
        <div
          style="
            margin: 0;
            margin-top: 70px;
            padding: 70px;
            background: #ffffff;
            border-radius: 30px;
            text-align: center;
          "
        >
          <div style="width: 100%; max-width: 489px; margin: 0 auto;">
            <h1
              style="
                margin: 0;
                font-size: 24px;
                font-weight: 500;
                color: #1f1f1f;
              "
            >
              Your OTP
            </h1>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-weight: 500;
                letter-spacing: 0.56px;
              "
            >
              Thank you for choosing Task Management Application. Use the following OTP
              to complete the procedure to change your email address. OTP is
              valid for
              <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>.
              Do not share this code with others
            </p>
            <p
              style="
                margin: 0;
                margin-top: 60px;
                font-size: 40px;
                font-weight: 600;
                letter-spacing: 25px;
                color: #ba3d4f;
              "
            >
              ${otp}
            </p>
          </div>
        </div>

        <p
          style="
            max-width: 400px;
            margin: 0 auto;
            margin-top: 90px;
            text-align: center;
            font-weight: 500;
            color: #8c8c8c;
          "
        >
          Need help? Ask at
          <a
            href="mailto:swapnilsudrik.s@gmail.com"
            style="color: #499fb6; text-decoration: none;"
            >swapnilsudrik.s@gmail.com</a
          >
          or visit our
          <a
            href=""
            target="_blank"
            style="color: #499fb6; text-decoration: none;"
            >Help Center</a
          >
        </p>
      </main>

      <footer
        style="
          width: 100%;
          max-width: 490px;
          margin: 20px auto 0;
          text-align: center;
          border-top: 1px solid #e6ebf1;
        "
      >
        <p
          style="
            margin: 0;
            margin-top: 40px;
            font-size: 16px;
            font-weight: 600;
            color: #434343;
          "
        >
          Swapnil Sudrik
        </p>
        <p style="margin: 0; margin-top: 8px; color: #434343;">
          Address:  411013, Pune, Maharashrta , India.
        </p>
        <p style="margin: 0; margin-top: 16px; color: #434343;">
          Copyright © 2022 Company. All rights reserved.
        </p>
      </footer>
    </div>
  </body>
</html>`;


    connection.query('SELECT email FROM users WHERE email=?', [emailDetails.userEmail], (err, result) => {
      if (err) {
        callback({
          sent: false,
          message:'something went wrong.. Please try again..!'
      });
      }
      if (result.length > 0) {
        callback({
          sent: false,
          message:'Email Already Exists , Please Use Login Credentials'
      });
      } else {
        // Send OTP via email
        const mailOptions = {
          from: 'addmytask@gmail.com',
          to: emailDetails.userEmail,
          subject: emailDetails.emailSubject,
          html: emailResponse
        };

        transporter.sendMail(mailOptions, (error) => {
          if (error) {
            console.error(error);
            callback({
              sent: false,
              message:'OTP Not Send'
          });
          }
          callback({
            sent: true,
            otp:otp,
            message:'OTP Not Send'
        });

          console.log('otp send success');

        });
      }

    })

  }
}

module.exports = new EmailSendingService;