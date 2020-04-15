import React from 'react';
import youtube from '../api/youtube'
import Page from "../shared/Page";
import SearchBar from "../shared/SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const KEY = 'AIzaSyDacXP9knVFt5UF_zRU7b9OwKwseO8HM6Q'
class index extends React.Component {
  state = {
    resultItems: []
  }

  onSearchSubmit = async (text) => {
    const response = await youtube.get('/search', {
      params: {
        q: text,
        part: "snippet",
        maxResults: 5,
        key: KEY
      }
    })

    this.setState({
      resultItems: response.data.items
    })
  }

  render() {
    const { resultItems } = this.state;

    return (
      <Page heading="Youtube App">
        <div className="youtube-app ui container">
          <SearchBar onSubmit={this.onSearchSubmit} resultItems={resultItems} />
          <div className="results-container">
            <h3>Video Search Results</h3>
            <div className="results-content">
              <VideoDetail resultItems={resultItems}/>
              <VideoList resultItems={resultItems}/>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default index;