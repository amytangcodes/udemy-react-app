import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({ resultItems }) => {
  console.log({resultItems});
  const videoList = resultItems.map((video, index) => <VideoItem video={video} key={index} />);

  return (
    <div className="video-list">
      <h3>Video List</h3>
      <div className="ui items">
        {videoList}
      </div>
    </div>
  )
}

export default VideoList;