import React from "react";
import { useSelector } from "react-redux";
import { selectDisplayName, selectProduct } from "./spotifyEampleSlice";

const SpotifyExample: React.FC = () => {
  const displayName = useSelector(selectDisplayName);
  const product = useSelector(selectProduct);

  return (
    <div style={{ color: "white" }}>
      {displayName && (
        <div style={{ marginTop: "20px" }}>
          You are currently logged in as {displayName}
        </div>
      )}
      {product && (
        <div style={{ marginTop: "10px" }}>
          Your subscription type is {product}
        </div>
      )}
    </div>
  );
};

export default SpotifyExample;
