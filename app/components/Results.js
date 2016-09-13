var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

function Results(props) {
  var winningInd = props.scores[0] > props.scores[1] ? 0 : 1
  var losingInd = winningInd === 0 ? 1 : 0;
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails
            score = {props.scores[winningInd]}
            info={props.players[winningInd]}
          />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails
            score = {props.scores[losingInd]}
            info={props.players[losingInd]}
          />
        </UserDetailsWrapper>
      </div>
    </div>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
