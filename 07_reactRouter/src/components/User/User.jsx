import React from 'react'
import {useParams} from 'react-router-dom'
const User = () => {
    const {userId} = useParams();
  return (
    <div className='text-4xl text-center bg-gray-600 text-white p-4'>User: {userId}</div>
  )
}

export default User