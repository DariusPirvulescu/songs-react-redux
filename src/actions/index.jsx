// my Action Creator
export const selectSong = (song) => {
  // will return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
