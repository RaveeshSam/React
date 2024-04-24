import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams()
  return (
    <div>
        I'm user {params.username}
    </div>
  )
}

export default Profile