import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

const Layout = ({setSideBar}) => {
  return (
    <>
    <Navigation setSideBar={setSideBar}/>
    <Outlet/>
    </>
  )
}

export default Layout
