import React from 'react'

const Video = ({thumbnail,tittle,views,time}) => {
  return (
    <div className='VideoCart'>
    <a href={`/youtube/${tittle}`}> <img src={thumbnail}/></a>
     <div className='details'>
        <div>
        <h4>{tittle}</h4>
        <p>{views}  &bull;  {time}</p>
        </div>
     </div>
    </div>
  )
}

export default Video