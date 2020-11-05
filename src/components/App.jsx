import React from "react";

import SongList from "./SongList";
import SelectSong from "./SelectSong";

import "./App.css";
const App = () => {
  return (
    <div>
      <h2 className="title">React + Redux = <span role="img" aria-label="love-hearth">💓</span> </h2>
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <SelectSong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
