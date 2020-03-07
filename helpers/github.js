const request = require('request');
// const config = require('../server/config.js');
require('dotenv').config();
const db = require('../database/index.js');

let getReposByUsername = (user) => {

  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.TOKEN}`
    }
  };

  function callback(error, response, body) {
    if (error) { console.log(error); }
    if (!error && response.statusCode == 200) {
      const info = JSON.parse(body);
      for (var i = 0; i < info.length; i++) {
        db.save({repoID: info[i].id, repoName: info[i].name, repoURL: info[i].svn_url, repoOwnerLogin: info[i].owner.login, repoOwnerID: info[i].owner.id, ownerURL: info[i].owner.url, forks: info[i].forks_count, stars: info[i].stargazers_count});
      }
    }
  }

  request(options, callback);

}

module.exports.getReposByUsername = getReposByUsername;