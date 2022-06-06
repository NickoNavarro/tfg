let  nodemailer = require('nodemailer');

const Mail  = (mail)=>{

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'nicolascfv@gmail.com',
          pass: process.env.PASS_MAIL
        }
      });

      let mensaje = `Felicidades te registraste corectamente`;

    let mailOptions = {
        from: process.env.PASS_MAIL,
        to: mail,
        subject: 'login correcto',
        text: mensaje
        };

    transporter.sendMail(mailOptions, (error, info)=>{
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
    });

    
}

module.exports = {
    Mail
}