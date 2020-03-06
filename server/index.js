const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const github = require('../helpers/github.js');

var jsonParser = bodyParser.json();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', jsonParser, function (req, res) {
  // TODO - your code here!
  // console.log(req.body.user);
  github.getReposByUsername(req.body.user);
  res.send('Hello World!');
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`I am listening on port ${port}`);
});

