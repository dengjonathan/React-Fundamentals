var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;

// MAKING COMPONENT THE NOMRMAL WAY
// var Prompt = React.createClass({
//   // this attribute allows use to require certain propTypes for our component
//   propTypes: {
//     header: PropTypes.string.isRequired,
//     onSubmitUser: PropTypes.func.isRequired,
//     onUpdateUser: PropTypes.func.isRequired,
//     username: PropTypes.string.isRequired
//   }
//   render: function() {
//     //console.log(this);
//     return (
//       <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
//         <h1>{this.props.header}</h1>
//         <div className="col-sm-12">
//           <form onSubmit={this.props.onSubmitUser}>
//             <div className="form-group">
//               <input className="form-control"
//                 placeholder="Github Username"
//                 type="text"
//                 onChange={this.props.onUpdateUser}
//                 value={this.props.username} />
//             </div>
//             <div className="form-group col-sm-4 col-sm-offset-4">
//               <button className="btn btn-block btn-success" type="submit">
//                 Continue
//               </button>
//             </div>
//           </form>
//           </div>
//       </div>
//     );
//   }
// });

// MAKING COMPONENT WITH FUNCTIONAL STATELESS CONTAINER (FOR VIEW ONLY COMPONENTS)
function Prompt(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input className="form-control"
              placeholder="Github Username"
              type="text"
              onChange={props.onUpdateUser}
              value={props.username} />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-block btn-success" type="submit">
              Continue
            </button>
          </div>
        </form>
        </div>
    </div>
  );
}

Prompt.PropTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = Prompt;