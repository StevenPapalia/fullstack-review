const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const github = require('../helpers/github.js');
const db = require('../database/index.js');

var jsonParser = bodyParser.json();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', jsonParser, function (req, res) {
  github.getReposByUsername(req.body.user, (information) => {
    // console.log(information);
    db.save(information);
    // save the repo information in the database
    // call save function here on the information
  });
  res.send('Hello World!');
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`I am listening on port ${port}`);
});

