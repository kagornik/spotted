import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  setLoggedIn,
  setAccessToken,
  setTokenExpiryDate,
  selectIsLoggedIn,
  selectTokenExpiryDate,
} from "./authorizationSlice";
import { setUserProfileAsync } from "../spotifyExample/spotifyEampleSlice";
import { getAuthorizeHref } from "./oauthConfig";
import { getHashParams, removeHashParamsFromUrl } from "../../utils/hashUtils";
import { AuthorizationButton } from "../../components/Button";
import * as styles from "../../styles/AuthorizationStyles";

const hashParams = getHashParams();
const access_token = hashParams.access_token;
const expires_in = hashParams.expires_in;
removeHashParamsFromUrl();

const Authorization: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const tokenExpiryDate = useSelector(selectTokenExpiryDate);

  const handleAuthorizationButton = () => {
    window.open(getAuthorizeHref(), "_self");
  };

  useEffect(() => {
    if (access_token) {
      dispatch(setLoggedIn(true));
      dispatch(setAccessToken(access_token));
      dispatch(setTokenExpiryDate(Number(expires_in)));
      dispatch(setUserProfileAsync(access_token));
    }
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.row}>
        {!access_token && (
          <AuthorizationButton
            variant="contained"
            color="primary"
            onClick={handleAuthorizationButton}
          >
            Log in to Spotify
          </AuthorizationButton>
        )}
        {isLoggedIn && (
          <div style={styles.token}>Token expiry date: {tokenExpiryDate}</div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Authorization);
