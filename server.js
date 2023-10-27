const express = require('express')
const bodyParser = require('body-parser')
const mailgun = require('mailgun-js')
const cors  = require('cors');
const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public', { 'Content-Type': 'application/javascript' }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/subscription', (req, res) => {
  const firstName = req.body.firstName 
  const lastName = req.body.lastName 
  const email = req.body.email

  var api_key = 'key-94dcfbe907b88417b880437d767c977e'; 
  var domain = 'sandboxf7fcc9e46a0c4ab3aa7d712c4c07a822.mailgun.org'; 
  var mg = mailgun({ apiKey: api_key, domain: domain });

  var data = {
    from: 'Aryan <aryannandal545@gmail.com>',
    to: email, 
    subject: 'Welcome to Deakin\'s Newsletter!',
    text: `Hello ${firstName} ${lastName},\n\nThank you for subscribing to Deakin's newsletter!\n\nBest regards,\nThe Deakin Team`
  };

  mg.messages().send(data, function (error, body) {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', body);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(5000, function () {
  console.log("Server is running at port 5080");
});