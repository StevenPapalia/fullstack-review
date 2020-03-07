const request = require('request');
const config = require('../server/config.js');

let getReposByUsername = (user, cb) => {

  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  function callback(error, response, body) {
    if (error) { console.log(error); }
    if (!error && response.statusCode == 200) {
      const info = JSON.parse(body);
      const infoToSendBack = [];
      for (var i = 0; i < info.length; i++) {
        infoToSendBack.push({repoID: info[i].id, repoName: info[i].name, repoURL: info[i].url, repoOwnerLogin: info[i].owner.login, repoOwnerID: info[i].owner.id, ownerURL: info[i].owner.url, forks: info[i].forks_count, stars: info[i].stargazers_count});
      }
      cb(infoToSendBack);
    }
  }

  request(options, callback);

}

module.exports.getReposByUsername = getReposByUsername;