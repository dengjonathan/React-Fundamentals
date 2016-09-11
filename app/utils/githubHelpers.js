var axios = require('axios');

// in case you want to use API key to access GitHub.
var id = "YOUR_CLIENT_ID";
var sex = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sex;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    }))
      .then(function(info) {
        return info.map(function(each) {
          return each.data;
        });
      })
      .catch(function(error) {
        console.warn("error in getPlayersInfo", error);
      });
  }
};

module.exports = helpers;