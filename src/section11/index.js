import React from 'react';
import youtube from '../api/youtube'
import Page from "../shared/Page";
import SearchBar from "../shared/SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class index extends React.Component {
  state = {
    resultItems: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onSearchSubmit('comedy');
  }

  onSearchSubmit = async (text) => {
    const response = await youtube.get('/search', {
      params: {
        q: text
      }
    })

    this.setState({
      resultItems: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    const { resultItems, selectedVideo } = this.state;

    return (
      <Page heading="Youtube App">
        <div className="youtube-app ui container">
          <SearchBar onSearchSubmit={this.onSearchSubmit} resultItems={resultItems} />
          <div className="ui grid">
            <div className="ui row">
              <VideoDetail selectedVideo={selectedVideo}/>
              <VideoList resultItems={resultItems} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default index;