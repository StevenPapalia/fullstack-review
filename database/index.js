const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('its gravy');
});

let repoSchema = new mongoose.Schema({
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
}

module.exports.save = save;
module.exports.Repo = Repo;
module.exports.db = db;