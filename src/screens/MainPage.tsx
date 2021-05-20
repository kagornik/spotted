import React from "react";
import UserInfo from "../features/spotifyExample/UserInfo";
import { ContainerStyle, SpanStyle } from "../styles/MainPageStyles";

const MainPage: React.FC = () => {
  return (
    <div style={ContainerStyle}>
      <span style={SpanStyle}>
        Now you can enjoy all the features of Spotted!
      </span>
      <UserInfo />
    </div>
  );
  ``;
};

export default MainPage;
