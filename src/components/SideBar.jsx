import React from 'react'
import game from '../assets/images/game_icon.png'
import blogs from '../assets/images/blogs.png'
import entertainment from'../assets/images/entertainment.png'
import automobiles from '../assets/images/automobiles.png'
import news from '../assets/images/news.png'
import music from '../assets/images/music.png'
import sports from '../assets/images/sports.png'
import tom from '../assets/images/tom.png'
import simon from '../assets/images/simon.png'
import megan from '../assets/images/megan.png'
import gerard from '../assets/images/gerard.png'
import jack from '../assets/images/jack.png'



const SideBar = ({sideBar}) => {
  return (
    <div className={`sideBar ${sideBar?'':'active'}`}>
        <h3>Category</h3>
        <div className='category-items'>
        <div className='category-item'>
            <img src={entertainment}/>
            <p>Entertainment</p>
        </div>
        <div className='category-item'>
        <img src={game}/>
            <p>Game</p>
        </div>
        <div className='category-item'>
        <img src={music}/>
            <p>Music</p>
        </div>
        <div className='category-item'>
        <img src={automobiles}/>
            <p>Automobiles</p>
        </div>
        <div className='category-item'>
        <img src={blogs}/>
            <p>Blogs</p>
        </div>
        <div className='category-item'>
        <img src={sports}/>
            <p>Blogs</p>
        </div>
        <div className='category-item'>
        <img src={news}/>
            <p>News</p>
        </div>
        </div>
        <h3>Channels</h3>
        <div className='channels'>
            <div className='channel'>
                <img src={tom}/>
                <div>
                <p>tom</p>
                <p>511K</p>
                </div>
            </div>
            <div className='channel'>
                <img src={simon}/>
                <div>
                <p>simon</p>
                <p>9K</p>
                </div>
            </div>
            <div className='channel'>
                <img src={megan}/>
                <div>
                <p>megan</p>
                <p>31.2M</p>
                </div>
            </div>
            <div className='channel'>
                <img src={gerard}/>
                <div>
                <p>gerard</p>
                <p>1.2K</p>
                </div>

            </div>
            <div className='channel'>
                <img src={jack}/>
                <div>
                <p>jack</p>
                <p>91K</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar