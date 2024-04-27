import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Sample from '../components/Sample'
import SideBar from '../components/SideBar'
import Article from '../components/Article'
const HomePage = ({sideBar}) => {


  return (
    <div className='main-container'>
    <div className='container'>
    <SideBar sideBar={sideBar}/>
    <Article/>
    </div>

    </div>
    
    
  )
}

export default HomePage