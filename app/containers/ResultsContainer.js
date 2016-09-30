  var React = require('react');
  var Results = require('../components/Results');
  var githubHelpers = require('../utils/githubHelpers');

  var ResultsContainer = React.createClass({
    getInitialState: function () {
      return {
        isLoading: true,
        scores: []
      };
    },
    componentDidMount: function () {
      console.log(this.props.location.state.players);
      githubHelpers.battle(this.props.location.state.players)
        .then(function (scores) {
          this.setState({
            scores: scores,
            isLoading: false
          });
        }.bind(this));
    },
    render: function () {
      return (
        <Results
        players={this.props.location.state.players}
        isLoading={this.state.isLoading}
        scores={this.state.scores}
      />
      );
    }
  });

  module.exports = ResultsContainer;
