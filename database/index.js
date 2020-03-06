const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repoID: Number,
  repoName: String,
  repoURL: String,
  repoOwner {
    repoOwnerLogin: String,
    repoOwnerID: Number,
    repoOwnerURL: String
  },
  forks: Number,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);


let save = (callback) => {
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

module.exports.save = save;

// db.repos.update({ repoID: id },
// {
//   repoName: String,
//   repoURL: String,
//   repoOwner {
//     repoOwnerLogin: String,
//     repoOwnerID: Number,
//     repoOwnerURL: String
//   },
//   forks: Number,
//   stars: Number
// },
// {
//   upsert: true
// })