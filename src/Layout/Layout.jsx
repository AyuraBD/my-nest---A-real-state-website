import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'

const Layout = () => {
  return (
    <div className='max-w-[1440px] m-auto'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Layout