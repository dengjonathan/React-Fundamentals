var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: 'Jon',
  username: 'jondeng',
  image: 'http://www.victoria.ac.nz/images/staffpics/jon-fraenkel.jpg'
};

var Link = React.createClass({
      changeUrl: function() {
        window.location.replace(this.props.href);
      },
      render: function() {
          return (<span
          style = {{ color: 'blue', cursor: 'pointer' }}
          onClick = {this.changeUrl} >
            {this.props.children } < /span>);
          }
        });

      var ProfilePic = React.createClass({
        render: function() {
          return <img src = { this.props.image } style = {{width: 100, height: 100}}/>;
        }
      });


      var ProfileLink = React.createClass({
        render: function() {
          return (
            <Link>
        <a href = {'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </Link>
          );
        }
      });


      var ProfileName = React.createClass({
        render: function() {
          return <div> { this.props.name } </div>
        }
      });

      var Avatar = React.createClass({
        render: function() {
          return (
            <div>
        <ProfilePic image={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
          );
        }
      });


      ReactDOM.render(<Avatar user = {USER_DATA} />, document.getElementById('app'));
