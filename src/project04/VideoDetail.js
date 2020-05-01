import React from 'react';

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div className="eleven wide column">Loading</div>
  }

  const src = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

  return (
    <div className="eleven wide column">
      <div className="ui embed">
        <iframe
          src={src}
          title="videoplayer"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p className="description">{selectedVideo.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;


// Spinner message="Loading..."/>