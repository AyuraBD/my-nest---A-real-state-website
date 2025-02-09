import React from 'react'
import Header from '../../Shared/Header/Header'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen'>
        <div className='flex justify-center items-center h-full flex-col'>
            <h1 className='text-6xl mb-3 font-bold'>404</h1>
            <p>Page not found. Please go back to <Link className='text-main font-semibold' to="/">home</Link> page</p>
        </div>
    </div>
  )
}

export default NotFound