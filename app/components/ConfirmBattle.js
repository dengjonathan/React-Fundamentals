var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var Link = require('react-router').Link
var UserDetails = require('../components/UserDetails');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle (props) {
  return props.isLoading === true ?
    <Loading speed={800} text={'Waiting'} /> :
    <MainContainer>
    <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-6'>
            <p className='lead'> Player 1</p>
              <UserDetails info={props.players[0]} />
          </div>
          <div className='col-sm-6'>
            <p className='lead'> Player 2</p>
              <UserDetails info={props.players[1]} />
        </div>
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
      </MainContainer>;
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
