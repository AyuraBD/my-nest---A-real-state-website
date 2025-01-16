import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/aboutus">About us</NavLink></li>
    <li><NavLink to="/properties">Our properties</NavLink></li>
  </>
  return (
    <div className="bg-white lg:px-14 md:px-8 sm:px-4 max-sm:px-0">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-80 h-60 p-4 shadow gap-3 z-1">
              {navLinks}
            </ul>
          </div>
          <a className="font-roboto text-2xl font-bold">My Nest</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="bg-main border border-main hover:bg-transparent hover:text-main duration-500 text-white px-3 py-2 font-semibold ">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Header