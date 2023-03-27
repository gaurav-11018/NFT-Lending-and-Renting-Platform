// import React, { useEffect, useState } from 'react';

// const NFTList = ({ lendingPlatform }) => {
//   const [nfts, setNfts] = useState([]);

//   useEffect(() => {
//     const fetchNFTs = async () => {
//       if (lendingPlatform) {
//         // Fetch NFTs from the smart contract here
//         // The implementation depends on your smart contract's structure
//       }
//     };

//     fetchNFTs();
//   }, [lendingPlatform]);

//   return (
//     <div>
//       <h2>NFT List</h2>
//       {nfts.map((nft) => (
//         // Render NFT information here
//       ))}
//     </div>
//   );
// };

// export default NFTList;
// import React, { useEffect, useState } from "react";

// const NFTList = ({ lendingPlatform }) => {
//   const [nfts, setNfts] = useState([]);

//   useEffect(() => {
//     const fetchNFTs = async () => {
//       // Fetch NFTs from your lending platform smart contract
//       // You will need to implement a function in your smart contract to return a list of NFTs
//       // The function should return an array of objects with nftAddress, tokenId, and other relevant information
//       // Replace this with the actual function call
//       const fetchedNFTs = []; // await lendingPlatform.getNFTs();
//       setNfts(fetchedNFTs);
//     };

//     if (lendingPlatform) {
//       fetchNFTs();
//     }
//   }, [lendingPlatform]);

//   return (
//     <div>
//       <h2>NFTs</h2>
//       <ul>
//         {nfts.map((nft, index) => (
//           <li key={index}>
//             NFT Address: {nft.nftAddress}, Token ID: {nft.tokenId}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NFTList;
import React from "react";
import "./NFTList.css";

const placeholderNFTs = [
  {
    imageUrl: "./i/1.png",
    rentPrice: 1.5,
  },
  {
    imageUrl: "./i/2.png",
    rentPrice: 20,
  },
  {
    imageUrl: "./i/3.png",
    rentPrice: 1,
  },
  {
    imageUrl: "./i/4.png",
    rentPrice: 36.5,
  },
  {
    imageUrl: "./i/5.jpg",
    rentPrice: 250,
  },
];

const NFTList = () => {
  return (
    <div className="nft-list">
      {placeholderNFTs.map((nft, index) => (
        <div key={index} className="nft-card">
          <img src={nft.imageUrl} alt="NFT" />
          <div className="rent-price">Rent: {nft.rentPrice} MATIC/PER DAY</div>
          <button className="borrow-button">Borrow</button>
        </div>
      ))}
    </div>
  );
};

export default NFTList;
