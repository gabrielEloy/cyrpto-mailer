const nodeMailer = require('nodemailer');

const sendEmail = async (destination, subject, text) => {

  if(!destination || !subject  || !text){
    throw Error('Please check the function params, the sendMail function expects 3 args, destination, subject and text');
  }

  const transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'eloy.crypto.mailer@gmail.com',
    pass: 'S8i32134',
  }
});

  
  const email = {
    from: 'eloy.crypto.mailer@gmail.com',
    to: destination,
    subject,
    text
  }

  await transporter.sendMail(email, error => {
    if(error){
      console.log('error')
      console.log(error);
      return;
    }

    console.log(`email successfully sent to ${destination}`)
  })
}

module.exports = sendEmail;