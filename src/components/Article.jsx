import React from 'react'
import Video from './Video'
import thumbnail1 from '../assets/images/thumbnail1.png'
import thumbnail2 from '../assets/images/thumbnail2.png'
import thumbnail3 from '../assets/images/thumbnail3.png'
import thumbnail4 from '../assets/images/thumbnail4.png'
import thumbnail5 from '../assets/images/thumbnail5.png'
import thumbnail6 from '../assets/images/thumbnail6.png'
import thumbnail7 from '../assets/images/thumbnail7.png'
import thumbnail8 from '../assets/images/thumbnail8.png'
import data from '../homeData.json'
const Article = () => {
  const thumb=[thumbnail1,thumbnail7,thumbnail8,thumbnail3,thumbnail4,thumbnail5,thumbnail6,thumbnail2,thumbnail8]
  console.log(data);
  return (
    <div className='Videos'>
      {
         data.map((data,id)=>{
         return <Video key={id} thumbnail={thumb[data.image_name]} tittle={data.tittle} time={data.time} views={data.views}/>
         })
      }
    </div>
  )
}

export default Article