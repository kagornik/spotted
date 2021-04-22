import React from "react";
import SpotifyExample from "../features/spotifyExample/SpotifyExample";
const MainPage: React.FC = () => {
  return (
    <div>
      <span style={{ color: "white", fontSize: "50px" }}>
        Hello, it's MainPage here :)
      </span>
      <SpotifyExample />
    </div>
  );
};
export default MainPage;
