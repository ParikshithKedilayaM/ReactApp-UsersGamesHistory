import React, { Component } from 'react';
import './App.css';
import Header from  './Header.js'
import EnterUserDetails from './EnterUserDetails.js'
import ListUsers from './ListUsers.js'

class App extends Component {
  
  state = {
    users : [],
  }

  updateUsers = (userlist) => {
    this.setState({
      users : userlist
    })
  }

  addUser = user => {
    this.setState( prevList =>({
      users : [...prevList.users, user],
    }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <EnterUserDetails userList = {this.state.users} addUser = {this.addUser}/>
        <ListUsers userList ={this.state.users}/>
        {JSON.stringify(this.state.users)}
      </div>
    );
  }
}

export default App;
