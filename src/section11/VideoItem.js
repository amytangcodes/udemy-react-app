import React from 'react'

class VideoItem extends React.Component {
  render() {
    const { thumbnails, title, description } = this.props.video.snippet;

    return (
      <div className="item">
        <div className="ui small image">
          <img src={thumbnails.default.url} alt={description}/>
        </div>
        <div className="content">
          {/* <a href={} className="header">{title}</a> */}
          <h3>{title}</h3>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoItem;
