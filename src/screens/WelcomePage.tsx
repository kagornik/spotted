import React from "react";
import spotifyLogo from "../assets/spotify_large_logo.png";
import SpotifyExample from "../features/spotifyExample/SpotifyExample";
import Authorization from "../features/authorization/Authorization";
import "../styles/WelcomePage.css";

const WelcomePage: React.FC = () => {
  return (
    <div className="Welcome-container">
      <header className="Welcome-header">
        <div>
          <h1 className="Welcome-text">Welcome!</h1>
          <h3 className="Welcome-description">
            The first thing you need to do is log in to your Spotify account
          </h3>
          <img src={spotifyLogo} className="Welcome-logo" alt="logo" />
          <Authorization />
          <SpotifyExample />
        </div>
      </header>
    </div>
  );
};

export default WelcomePage;
