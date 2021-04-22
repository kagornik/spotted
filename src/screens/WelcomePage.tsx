import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import spotifyLogo from "../assets/spotify_large_logo.png";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Authorization from "../features/authorization/Authorization";
import { selectIsLoggedIn } from "../features/authorization/authorizationSlice";
import { PATH_ROUTES } from "../routes/Routes";
import "../styles/WelcomePage.css";

type WelcomePageProps = RouteComponentProps;

const WelcomePage: React.FC<WelcomePageProps> = ({ history }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      history.push(PATH_ROUTES.MAIN_PAGE);
    }
  }, [isLoggedIn]);

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
        </div>
      </header>
    </div>
  );
};

export default withRouter(WelcomePage);
