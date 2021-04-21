import React from "react";
import spotifyLogo from "../assets/spotify_large_logo.png";
import { SpotifyExample } from "../features/spotifyExample/SpotifyExample";
import Authorization from "../features/authorization/Authorization";
import "./WelcomePageStyles.css";

const WelcomePage: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spotifyLogo} className="App-logo" alt="logo" />
        <Authorization />
        <SpotifyExample />
      </header>
    </div>
  );
};

export default WelcomePage;
