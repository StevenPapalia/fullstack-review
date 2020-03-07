const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('its gravy');
});

let repoSchema = mongoose.Schema({
  repoID: Number,
  repoName: String,
  repoURL: String,
  repoOwnerLogin: String,
  repoOwnerID: Number,
  repoOwnerURL: String,
  forks: Number,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);


let save = (repoCallback) => {
  repoCallback();
  // var oneRepo = new Repo(reposArray[0]);
  // for (var i = 0; i < reposArray.lemgth; i++) {
  //   db.updateIfNotExists( new Repo(reposArray[i]) );
  // }

  // TODO
  // put logic to turn array of objects into array of models in server
  // call save on each model
  // pass an error first pattern callback to save
  // (err, repo) => if err log err, else log repo.name saved!
  // check db

  // if field repo does not already exist in the repos
  // insert repo into repos with props defined in our schema
  // select all from db to check if insertion was successful
  // db.repos.find().pretty()
  // db.repos.find({ id: xxx }).sort({ forks: 1 }).limit().pretty()

  // callback
}

module.exports.save = save;
module.exports.Repo = Repo;
module.exports.db = db;