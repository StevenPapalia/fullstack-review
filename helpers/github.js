const request = require('request');
const config = require('../server/config.js');

let getReposByUsername = (user) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  // 'github.com/orgs/octokit/repos'
  console.log(user);

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
      // console.log(info.stargazers_count + " Stars");
      // console.log(info.forks_count + " Forks");
      for (var i = 0; i < info.length; i++) {
        console.log("repo name: ", info[i].name);
      }
    }
  }

  request(options, callback);

}

module.exports.getReposByUsername = getReposByUsername;