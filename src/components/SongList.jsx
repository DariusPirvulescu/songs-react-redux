import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // props are available
    // console.log("PROPSSS: ", this.props)
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// this fct will get passed to connect(...)
// the return of this fct will be the new props
// of SongList component !!!
const mapStateToProps = (state) => {
  // console.log(state);
  return { songs: state.songsList };
};

// connect is a function that returns another function,
// so here, you just call the two functions ()(...)
export default connect(mapStateToProps, {
  selectSong
})(SongList);
