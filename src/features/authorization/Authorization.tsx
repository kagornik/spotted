import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import styles from "../counter/Counter.module.css";

const hashParams = getHashParams();
const access_token = hashParams.access_token;
const expires_in = hashParams.expires_in;
removeHashParamsFromUrl();

const Authorization: FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const tokenExpiryDate = useSelector(selectTokenExpiryDate);

  useEffect(() => {
    if (access_token) {
      dispatch(setLoggedIn(true));
      dispatch(setAccessToken(access_token));
      dispatch(setTokenExpiryDate(Number(expires_in)));
      dispatch(setUserProfileAsync(access_token));
    }
  }, []);

  return (
    <div>
      <div className={styles.row}>
        {!isLoggedIn && (
          <button
            className={styles.button}
            aria-label="Log in using OAuth 2.0"
            onClick={() => window.open(getAuthorizeHref(), "_self")}
          >
            Log in with Spotify
          </button>
        )}
        {isLoggedIn && (
          <div className={styles.row}>Token expiry date: {tokenExpiryDate}</div>
        )}
      </div>
    </div>
  );
};

export default Authorization;
