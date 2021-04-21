import React from "react";
import spotifyLogo from "./assets/spotify_large_logo.png";
import { SpotifyExample } from "./features/spotifyExample/SpotifyExample";
import { Authorization } from "./features/authorization/Authorization";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spotifyLogo} className="App-logo" alt="logo" />
        <Authorization />
        <SpotifyExample />
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
