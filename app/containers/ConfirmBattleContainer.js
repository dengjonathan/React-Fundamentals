var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      players: []
    };
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {
    // make call to Github api with player names
    var query = this.props.location.query; // this is passed in from PromptContainers onSubmitUser handler
    githubHelpers.getPlayersInfo([query.playerOne, query.PlayerTwo])
      .then(function(players) {
        this.setState({
          isLoading: false,
          players: [players[0], players[1]]
        });
      }.bind(this));

  },
  componentWillReceiveProps: function() {

  },
  componentwillUnmount: function() {

  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        players={this.state.players}
      />
    );
  }
});

module.exports = ConfirmBattleContainer;