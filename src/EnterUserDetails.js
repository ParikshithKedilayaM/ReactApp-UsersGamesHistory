import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EnterUserDetails extends Component {
  state = {
    fname : '',
    lname : '',
    uname : '',
    games : 0,
    error: '',
  }
  changeFname =(event) => {
    this.setState({
      fname : event.target.value
    })
  }
  changeLname =(event) => {
    this.setState({
      lname : event.target.value
    })
  }
  changeUname =(event) => {
    this.setState({
      uname : event.target.value
    })
  }

  checkIfExists = (val) => {
    const users = this.props.userList;
    for (let user of users) {
      if (user.uname === val) {
        return true;
      }
    }
    return false;
  }

  setErrorMessage = (message) => {
    this.setState({
      error : message,
    });
  };

  sendResults = (event) => {
    event.preventDefault();
    const ifUserExists = this.checkIfExists(this.state.uname);
    if (!ifUserExists) {
      this.setErrorMessage('');
      this.props.addUser ({fname : this.state.fname,
                         lname : this.state.lname,
                         uname : this.state.uname,
                         games : this.state.games,
                        });
    } else {
       this.setErrorMessage('Username taken! Choose a new one.');
    }
  }

  inputIsEmpty = () => {
    return this.state.fname ==='' || this.state.lname === '' || this.state.uname === ''
  }

  render () {
    return (
      <div>
        <form className = 'UserDetailsForm' onSubmit = {this.sendResults}>
          <label>First Name : </label>
          <input type = "text" value = {this.state.fname} onChange = {this.changeFname} />
          <label>Last Name : </label>
          <input type = "text" value = {this.state.lname} onChange = {this.changeLname} />
          <label>Username : </label>
          <input type = "text" value = {this.state.uname} onChange = {this.changeUname} />
          <button disabled={this.inputIsEmpty()}>Add User</button>
        </form>
        <p className = "error">{this.state.error}</p>
      </div>
    )
  }
}

EnterUserDetails.propTypes = {
  userList : PropTypes.array.isRequired,
  addUser : PropTypes.func.isRequired,
}
export default EnterUserDetails;