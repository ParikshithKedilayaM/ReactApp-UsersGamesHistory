import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EnterUserDetails extends Component {
  state = {
    fname : '',
    lname : '',
    uname : '',
    games : 0,
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
    return this.props.userList.filter(user => (val === user.slice(2,3).toString()))
  }

  sendResults = (event) => {
    event.preventDefault();
    this.checkIfExists(this.state.uname) &&
    this.props.addUser ([this.state.fname, this.state.lname, this.state.uname, this.state.games])
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
<p>Holy {this.checkIfExists(this.state.uname)}</p>
        </form>
      </div>
    )
  }
}

EnterUserDetails.propTypes = {
  userList : PropTypes.array.isRequired,
  addUser : PropTypes.func.isRequired,
}
export default EnterUserDetails;