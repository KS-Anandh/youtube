import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

const Layout = ({setsideBar}) => {
  return (
    <>
    <Navigation setSideBar={setsideBar}/>
    <Outlet/>
    </>
  )
}

export default Layout