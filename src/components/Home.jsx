import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Sidebar />
            <Outlet />
        <Navbar />
    </>
  )
}

export default Home