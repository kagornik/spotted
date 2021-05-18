import React from "react";
import { useSelector } from "react-redux";
import SpotifyExample from "../features/spotifyExample/SpotifyExample";
import {
  selectIsLoggedIn,
  selectTokenExpiryDate,
} from "../features/authorization/authorizationSlice";

const MainPage: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const tokenExpiryDate = useSelector(selectTokenExpiryDate);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ color: "white", fontSize: "50px" }}>
        Now you can enjoy all the features of Spotted
      </span>
      <SpotifyExample />
      {isLoggedIn && (
        <div style={{ color: "white", fontSize: "50px" }}>
          Token expiry date: {tokenExpiryDate}
        </div>
      )}
    </div>
  );
};

export default MainPage;
