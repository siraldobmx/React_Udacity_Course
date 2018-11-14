import React, { Component } from 'react'

class ListUsers extends Component {
  render() {
    return (
      <ol className='user-list'>
        {this.props.users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
		))}
	  </ol>
    )
  }
}

export default ListUsers