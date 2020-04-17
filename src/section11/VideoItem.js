import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
  const { thumbnails, title } = video.snippet;

  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <div className="ui small image">
        <img src={thumbnails.medium.url} alt={title}/>
      </div>
      <div className="content">
        <h3>{title}</h3>
      </div>
    </div>
  )
}


export default VideoItem;
