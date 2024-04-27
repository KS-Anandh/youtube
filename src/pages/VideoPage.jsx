import React from 'react'
import { useParams } from 'react-router-dom'
import thumbnail1 from '../assets/images/thumbnail1.png'
import thumbnail2 from '../assets/images/thumbnail2.png'
import thumbnail3 from '../assets/images/thumbnail3.png'
import thumbnail4 from '../assets/images/thumbnail4.png'
import thumbnail5 from '../assets/images/thumbnail5.png'
import thumbnail6 from '../assets/images/thumbnail6.png'
import thumbnail7 from '../assets/images/thumbnail7.png'
import thumbnail8 from '../assets/images/thumbnail8.png'
import data from '../homeData.json'

const VideoPage = () => {
  const thumb=[thumbnail1,thumbnail2,,thumbnail3,thumbnail4,thumbnail5,thumbnail6,thumbnail7,thumbnail8]
  const {tittle}=useParams();
  const mdata=data.filter((item)=>{
    return item.tittle===tittle;
  })
  const Mdata=mdata[0];
  return (
    <div className="Video-container">
            <img src={thumb[Mdata.image_name]}/>
            <div className='v-details'>
              <h2>{Mdata.tittle}</h2>
              <div>
              <p>{Mdata.views}</p>
              <p>{Mdata.time}</p>
              </div>
             
            </div>
    </div>
  )
}

export default VideoPage