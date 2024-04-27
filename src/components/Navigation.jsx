import React from 'react'
import menu from '../assets/images/menu.png'
import logo from '../assets/images/logo.png'
import search from '../assets/images/search.png'
import upload from '../assets/images/upload.png'
import notification from '../assets/images/notification.png'
import user_profile from '../assets/images/profile.jpg'

const Navigation = ({setSideBar}) => {
  return (
    <div className='navigation'>
        <div className='left-nav df'>
         <img src={menu} className='img1' onClick={()=>{
          setSideBar((prev)=>{
            return prev?false:true
          })
         }}/>
         <img src={logo} className='img2'/>
        </div>
        <div className='middle-nav df'>
            <input type="text " placeholder=' Search' />
            <img src={search}/>
        </div>
        <div className='right-nav df'>
            <img src={upload} className='imgno'/>
            <img src={notification}/>
            <img src={user_profile}/>
        </div>
    </div>
  )
}

export default Navigation