import React, {Component} from 'react'
import PropTypes from 'prop-types';

class User extends Component {
  render () {
    return (
    <li className="user">
      <p>Username: {this.props.user.uname}</p>
      <p>Number of Games Played: {this.props.showGamesPlayed ? this.props.user.games : '-'}</p>
    </li> 
  )}
}
User.propTypes = {
  showGamesPlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};
export default User;