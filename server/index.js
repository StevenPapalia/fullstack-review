const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const github = require('../helpers/github.js');
const db = require('../database/index.js');

var jsonParser = bodyParser.json();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', jsonParser, function (req, res) {
  // get repos from github
  github.getReposByUsername(req.body.user, (information) => {
    // define a model schema
    var Repo = db.Repo;
    for (var i = 0; i < information.length; i++) {
      var oneRepo = new Repo(information[i]);
      oneRepo.save( (err, repo) => {
        if (err) { return console.log(err); }
        console.log('added: ', repo.repoName);
      } );

    // Repo.findOne({ repoID: information[i].repoID }, function (err, repo){
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     if (repo) {
    //       console.log('exists');
    //     } else {
    //       console.log('no exists');

    //     }
    //   }
    // });



    }

  });
  res.send('Hello World!');
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  console.log('made it here!!!!!');
  res.send('got response on top25');
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`I am listening on port ${port}`);
});

