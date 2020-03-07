const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('its gravy');
})

let repoSchema = new mongoose.Schema({
  repoID: { type: Number, unique: true },
  repoName: { type: String, unique: true },
  repoURL: { type: String, unique: true },
  repoOwnerLogin: String,
  repoOwnerID: Number,
  repoOwnerURL: String,
  forks: Number,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);


let save = (repo) => {
  var oneRepo = new Repo(repo);
  oneRepo.save((err, repo) => {
    if (err) { return console.log(err); }
    console.log('added: ', repo.repoName);
  })
}

module.exports.save = save;
module.exports.Repo = Repo;
module.exports.db = db;