import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ListUsers extends Component {
  render() {
    return(
      <div>
      <table>
        
        {this.props.userList.forEach( user => {
           
        })}
      </table>
      </div>
    )
  }
}
ListUsers.propTypes = {
  userList : PropTypes.array.isRequired,
}
export default ListUsers;