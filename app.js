const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config({ path: 'variables.env' })


app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.listen(3000, () => {
  console.log('live at 3000')
})

app.post('/', (req, res) => {
  addEmailToMailchimp(req.body.email)
  res.send('success')
})

function addEmailToMailchimp(email) {
  var request = require("request");

  var options = {
    method: 'POST',
    url: 'https://us19.api.mailchimp.com/3.0//lists/3afd7d1937/members',
    headers: {
      'postman-token': 'a13333e7-6268-24e3-3c4d-e2b265824d15',
      'cache-control': 'no-cache',
      authorization: process.env.MAILCHIMP_AUTH,
      'content-type': 'application/json'
    },
    body: {
      email_address: email,
      status: 'subscribed'
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
      console.log(body);
  });

}