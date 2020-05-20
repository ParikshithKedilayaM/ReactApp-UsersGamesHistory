import React, {Component} from 'react'
import PropTypes from 'prop-types'
import User from './User.js'

class ListUsers extends Component {
  state = {
    showGames : true
  };

  toggleShowHide = () => {
    this.setState(prevState => ({
      showGames : !prevState.showGames,
    }));
  };
  
  render() {
    const toggleButton = <div>
        <button className = "smallButton" onClick = {this.toggleShowHide} >
        {this.state.showGames ? 'Show' : 'Hide'} the number of games played.
        </button></div>;


    const users = 
        <div><h1>Users: </h1>
        <ol>
         {
           this.props.userList.map(user => (
            <User key = {user.uname} showGamesPlayed = {this.state.showGames} user = {user} />
          ))
         }
        </ol>
        </div>;
    
    return(
      <div>
       {this.props.userList.length>0 && toggleButton }
      {this.props.userList.length>0 && users}
      </div>
    )
  }
}
ListUsers.propTypes = {
  userList : PropTypes.array.isRequired,
}
export default ListUsers;