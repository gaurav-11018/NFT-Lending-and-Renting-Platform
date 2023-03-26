import React, { useState } from "react";
import "./NFTLendingForm.css";

const NFTLendingForm = ({ title, onSubmit }) => {
  const [nftAddress, setNftAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [duration, setDuration] = useState("");
  const [collateralAmount, setCollateralAmount] = useState("");
  const [feeAmount, setFeeAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nftAddress, tokenId, duration, collateralAmount, feeAmount);
  };

  return (
    <div className="nft-lending-form">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="NFT Address"
          value={nftAddress}
          onChange={(e) => setNftAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Token ID"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration (in seconds)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="text"
          placeholder="Collateral Amount"
          value={collateralAmount}
          onChange={(e) => setCollateralAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fee Amount"
          value={feeAmount}
          onChange={(e) => setFeeAmount(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NFTLendingForm;
