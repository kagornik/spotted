import React from "react";
import UserInfo from "../features/spotifyExample/UserInfo";
import FeatureCard from "../components/FeatureCard";
import { ContainerStyle, SpanStyle, HintStyle } from "../styles/MainPageStyles";

const MainPage: React.FC = () => {
  return (
    <>
      <div style={ContainerStyle}>
        <span style={SpanStyle}>
          Now you can enjoy all the features of Spotted!
        </span>
        <UserInfo />
        <div style={HintStyle}>Please select one of the options below</div>
      </div>
      <div style={{ display: "flex" }}>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </>
  );
};

export default MainPage;
