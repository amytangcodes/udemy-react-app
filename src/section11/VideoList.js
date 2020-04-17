import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({ resultItems, onVideoSelect }) => {
  const renderedVideoList = resultItems.map((video, index) =>
    <VideoItem
      video={video}
      key={index}
      onVideoSelect={onVideoSelect}
    />
  );

  return (
    <div className="five wide column">
      <div className="ui items">{renderedVideoList}</div>
    </div>
  )
}

export default VideoList;