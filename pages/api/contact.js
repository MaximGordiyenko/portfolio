export default function (req, res) {
  require('dotenv').config()
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  
  const mailData = {
    from: 'demo email',
    to: process.env.EMAIL,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
  }
  
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  })
  
  console.log(req.body)
  res.send('success')
}