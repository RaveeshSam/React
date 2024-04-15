import React from 'react'
import "./User.css"

const User = (props) => {
    const users = props.users;

  return (
    <div className='ucard'>
        {users.map((user) => (
            <div className='users'>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
            </div>
        ))}
    </div>
  )
}

export default User