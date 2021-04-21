import React from "react";
import { useSelector } from "react-redux";
import { selectDisplayName, selectProduct } from "./spotifyEampleSlice";

const SpotifyExample: React.FC = () => {
  const displayName = useSelector(selectDisplayName);
  const product = useSelector(selectProduct);

  return (
    <div style={{ color: "white" }}>
      {displayName && <div>Logged in as: {displayName}</div>}
      {product && <div>Subscription type: {product}</div>}
    </div>
  );
};

export default SpotifyExample;
