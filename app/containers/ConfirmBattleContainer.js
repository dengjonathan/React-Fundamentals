var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var context

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
    console.log('Query', query);
    this.setState({
      isLoading: false
    });
  },
  componentWillRecieveProps: function() {

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