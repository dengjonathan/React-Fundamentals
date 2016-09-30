var React = require('react');
var ReactCSSTranstion = require('react-addons-css-transition-group');
require('../main.css')

var Main = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        <ReactCSSTranstion
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTranstion>
      </div>
    );
  }
});

module.exports = Main;
