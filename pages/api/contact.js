import { SMTPClient } from 'emailjs';

export default function handler(req, res) {
  
  const { email } = req.body;
  // console.log(process.env)
  
  const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true
  });
  
  try {
    client.send(
      {
        text: `Get in touch`,
        from: 'maximhordiienko.versel.app',
        to: email,
        subject: 'Propose topic to discuss',
        
      },
      err => console.log(err),
    );
  } catch (e) {
    res.status(400).end(JSON.stringify({ message: e }));
    return;
  }
  res.status(200).end(JSON.stringify({ message: 'Send Mail' }));
}