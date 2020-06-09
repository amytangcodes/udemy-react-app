import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { selectSong } from "./actions";

class SongList extends Component {
  renderList = () => {
    return this.props.songs.map((song, index) => (
      <div key={index} className="song-item-wrapper flex">
        <p>{song.title}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.props.selectSong(song)}
        >
          Select
        </Button>
      </div>
    ));
  };

  render() {
    // console.log(this.props);
    return (
      <div className="block_song-list">
        <h2>List of Songs</h2>
        <div className="song-list-container">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log({ state });
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, {
  // selectSong: selectSong ES6 syntax below
  selectSong,
})(SongList);
