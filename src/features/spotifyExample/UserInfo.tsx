import React from "react";
import { useSelector } from "react-redux";
import { selectDisplayName, selectProduct } from "./spotifyEampleSlice";
import {
  ConatinerStyle,
  LoginStyle,
  SubscriptionStyle,
} from "../../styles/UserInfoStyles";

const UserInfo: React.FC = () => {
  const displayName = useSelector(selectDisplayName);
  const product = useSelector(selectProduct);

  return (
    <div style={ConatinerStyle}>
      {displayName && (
        <div style={LoginStyle}>
          You are currently logged in as {displayName}
        </div>
      )}
      {product && (
        <div style={SubscriptionStyle}>Your subscription type is {product}</div>
      )}
    </div>
  );
};

export default UserInfo;
