var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

function ConfirmBattle (props) {
  return props.isLoading === true ?
    <p> LOADING! </p> :
    <div> CONFIRM BATTLE: {puke(props)}</div>;
  ;
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
  onInitBattle=PropTypes.func.isRequired
}

module.exports = ConfirmBattle;