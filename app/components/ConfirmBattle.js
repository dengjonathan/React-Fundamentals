var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var Link = require('react-router').Link


function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

function ConfirmBattle (props) {
  return props.isLoading === true ?
    <p> LOADING! </p> :
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
        {puke(props.players[0])}
        {puke(props.players[1])}
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12'>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12'>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </div>;
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
  onInitBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;

      // <UserDetailsWrapper header='Player 1'>
          //   <UserDetails info={props.playersInfo[0]} />
          // </UserDetailsWrapper>
          // <UserDetailsWrapper header='Player 2'>
          //   <UserDetails info={props.playersInfo[1]} />
          // </UserDetailsWrapper>
          //
