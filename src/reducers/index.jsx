import { combineReducers } from "redux";

const songsList = () => {
  return [
    { title: "Shape of My Heart", duration: "3:44" },
    { title: "Who Let the Dogs Out", duration: "2:43" },
    { title: "Last Resort", duration: "7:32" },
    { title: "As Long As You Love Me", duration: "2:22" },
    { title: "Quit Playing Games", duration: "3:21" },
  ];
};

const selectSong = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectSong;
};

export default combineReducers({
  songsList: songsList,
  selectSong: selectSong,
});
