import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#000000] py-6 lg:px-14 md:px-8 sm:px-4 max-sm:px-2">
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        <div>
          <div className='text-white'>
            © Copyright 2025 All rights reserved by <Link to="/" className="link link-hover">My Nest</Link> 
          </div>
        </div>        
        <div className='text-white flex list-none gap-4'>
          <li><Link className="link link-hover" to="/">Home</Link></li>
          <li><Link className="link link-hover" to="/aboutus">About us</Link></li>
          <li><Link className="link link-hover" to="/properties">Our properties</Link></li>
          <li><Link className="link link-hover" to="/login">Login</Link></li>
          <li><Link className="link link-hover" to="/signup">Sign up</Link></li>
        </div>
      </div>
    </footer>
  )
}

export default Footer