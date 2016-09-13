var axios = require('axios');

// in case you want to use API key to access GitHub.
var id = "YOUR_CLIENT_ID";
var sex = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sex;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

function getScore(player) {
  var stars;
  var followers;
  // get player repos from gitHub API
  getUserInfo(player) // should return promise
  // .then get number of stars/ followers
    .then(function(response) {
      stars = response.followers;
      followers = response.followers;
    })
    .catch(function(err) {
      // do something on error
    });
}

function getStars(player) {

}

function getFollowers(player) {

}

function calcScore(stars, followers) {

}

// TODO make github battle helpers function
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
  },
  battle: function(players) {
    // return promise then do some async work
    return axios.all(players.map(function(username) {
      return getScore(player);
    }))
  }
};

module.exports = helpers;