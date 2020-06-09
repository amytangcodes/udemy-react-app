import { combineReducers } from "redux";

// Song list reducer
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "I Want It That Way", duration: "4:35" },
    { title: "Macarena", duration: "3:15" },
    { title: "All Star", duration: "1:15" },
  ];
};

// Selected song reducer
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
