import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container text-center'>
        <h2>This page is in development mood</h2>
       <Link to="/home">
          <button className='btn btn-danger mt-3'> Go To Home Page</button>
       </Link>
    </div>
  )
}

export default NotFound
