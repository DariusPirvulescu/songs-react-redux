import React from "react";
import { connect } from "react-redux";

// as functional Component
const SelectSong = ({ song }) => {
  if (!song.title) {
    return <div>Select a Song</div>;
  }
  return (
    <div>
      <h3>Description for:</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectSong };
};

export default connect(mapStateToProps)(SelectSong);
