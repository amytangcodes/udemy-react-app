import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div className="block_song-detail">
        <h3>Pick a song!</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>Song Detail</h2>
      <div className="song-detail-container">
        <p>
          <span>Title:</span> {song.title}{" "}
        </p>
        <p>
          <span>Length:</span> {song.duration}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log({ state });
  // return state;
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
