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


let save = (reposArray) => {
  // console.log(reposArray);
  var example = new Repo(reposArray[0]);
  console.log(example.repoName); // 'Silence'
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // if field repo does not already exist in the repos
  // insert repo into repos with props defined in our schema
  // select all from db to check if insertion was successful
  // db.repos.find().pretty()
  // db.repos.find({ id: xxx }).sort({ forks: 1 }).limit().pretty()

  // callback
}

// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   fluffy.speak();
// });

module.exports.save = save;