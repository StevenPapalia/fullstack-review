const request = require('request');
const config = require('../server/config.js');

let getReposByUsername = (url) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL


  console.log('woohoo');


  // let options = {
  //   url: '/orgs/octokit/repos',
  //   headers: {
  //     'User-Agent': 'request',
  //     'Authorization': `token ${config.TOKEN}`
  //   }
  // };

}

module.exports.getReposByUsername = getReposByUsername;