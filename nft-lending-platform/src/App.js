// // import React, { useState, useEffect } from "react";
// // import Web3 from "web3";
// // // require("dotenv").config();
// // // const CONTRACT_ABI = JSON.parse(process.env.CONTRACT_ABI);
// // // require("dotenv").config();

// // const CONTRACT_ABI = [
// //   {
// //     inputs: [
// //       {
// //         internalType: "address",
// //         name: "nftAddress",
// //         type: "address",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "tokenId",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "address",
// //         name: "collateralTokenAddress",
// //         type: "address",
// //       },
// //     ],
// //     name: "borrowNFT",
// //     outputs: [],
// //     stateMutability: "nonpayable",
// //     type: "function",
// //   },
// //   {
// //     inputs: [
// //       {
// //         internalType: "address",
// //         name: "nftAddress",
// //         type: "address",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "tokenId",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "duration",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "collateralAmount",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "dailyFeeAmount",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "maxRentDays",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "string",
// //         name: "ipfsCID",
// //         type: "string",
// //       },
// //     ],
// //     name: "lendNFT",
// //     outputs: [],
// //     stateMutability: "nonpayable",
// //     type: "function",
// //   },
// //   {
// //     inputs: [
// //       {
// //         internalType: "address",
// //         name: "nftAddress",
// //         type: "address",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "tokenId",
// //         type: "uint256",
// //       },
// //     ],
// //     name: "retrieveNFT",
// //     outputs: [],
// //     stateMutability: "nonpayable",
// //     type: "function",
// //   },
// //   {
// //     inputs: [
// //       {
// //         internalType: "address",
// //         name: "nftAddress",
// //         type: "address",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "tokenId",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "address",
// //         name: "feeTokenAddress",
// //         type: "address",
// //       },
// //     ],
// //     name: "returnNFT",
// //     outputs: [],
// //     stateMutability: "nonpayable",
// //     type: "function",
// //   },
// //   {
// //     inputs: [
// //       {
// //         internalType: "address",
// //         name: "collateralTokenAddress",
// //         type: "address",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "amount",
// //         type: "uint256",
// //       },
// //     ],
// //     name: "withdrawCollateral",
// //     outputs: [],
// //     stateMutability: "nonpayable",
// //     type: "function",
// //   },
// //   {
// //     inputs: [
// //       {
// //         internalType: "address",
// //         name: "",
// //         type: "address",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "",
// //         type: "uint256",
// //       },
// //     ],
// //     name: "loans",
// //     outputs: [
// //       {
// //         internalType: "address",
// //         name: "lender",
// //         type: "address",
// //       },
// //       {
// //         internalType: "address",
// //         name: "borrower",
// //         type: "address",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "tokenId",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "startTime",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "duration",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "collateralAmount",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "dailyFeeAmount",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "uint256",
// //         name: "maxRentDays",
// //         type: "uint256",
// //       },
// //       {
// //         internalType: "bool",
// //         name: "isActive",
// //         type: "bool",
// //       },
// //       {
// //         internalType: "string",
// //         name: "ipfsCID",
// //         type: "string",
// //       },
// //     ],
// //     stateMutability: "view",
// //     type: "function",
// //   },
// // ];
// // const CONTRACT_ADDRESS = "0xb90ba369335aBA8e6C5F21D7A4283cCF30b99932";

// // function App() {
// //   const [web3, setWeb3] = useState(null);
// //   const [accounts, setAccounts] = useState([]);
// //   const [contract, setContract] = useState(null);
// //   const [nftAddress, setNftAddress] = useState("");
// //   const [tokenId, setTokenId] = useState("");
// //   const [duration, setDuration] = useState("");
// //   const [dailyFeeRate, setDailyFeeRate] = useState("");
// //   const [maxRentDays, setMaxRentDays] = useState("");
// //   const [ipfsHash, setIpfsHash] = useState("");
// //   const [collateralTokenAddress, setCollateralTokenAddress] = useState("");
// //   const [collateralAmount, setCollateralAmount] = useState("");
// //   const [feeTokenAddress, setFeeTokenAddress] = useState("");

// //   useEffect(() => {
// //     const initWeb3 = async () => {
// //       if (window.ethereum) {
// //         const web3Instance = new Web3(window.ethereum);
// //         const accounts = await web3Instance.eth.getAccounts();
// //         const contractInstance = new web3Instance.eth.Contract(
// //           CONTRACT_ABI,
// //           CONTRACT_ADDRESS
// //         );

// //         setWeb3(web3Instance);
// //         setAccounts(accounts);
// //         setContract(contractInstance);
// //       } else {
// //         alert("Please install MetaMask to use this app.");
// //       }
// //     };

// //     initWeb3();
// //   }, []);

// //   const lendNFT = async () => {
// //     if (!contract || !accounts.length) return;

// //     try {
// //       await contract.methods
// //         .lendNFT(
// //           nftAddress,
// //           tokenId,
// //           duration,
// //           dailyFeeRate,
// //           maxRentDays,
// //           ipfsHash
// //         )
// //         .send({ from: accounts[0] });
// //       alert("NFT lent successfully");
// //     } catch (error) {
// //       alert("Error lending NFT");
// //     }
// //   };

// //   const borrowNFT = async () => {
// //     if (!contract || !accounts.length) return;

// //     try {
// //       await contract.methods
// //         .borrowNFT(nftAddress, tokenId, collateralTokenAddress)
// //         .send({ from: accounts[0] });
// //       alert("NFT borrowed successfully");
// //     } catch (error) {
// //       alert("Error borrowing NFT");
// //     }
// //   };

// //   const returnNFT = async () => {
// //     if (!contract || !accounts.length) return;

// //     try {
// //       await contract.methods
// //         .returnNFT(nftAddress, tokenId, feeTokenAddress)
// //         .send({ from: accounts[0] });
// //       alert("NFT returned successfully");
// //     } catch (error) {
// //       alert("Error returning NFT");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>NFT Lending Platform</h1>

// //       <h2>Lend NFT</h2>
// //       <input
// //         placeholder="NFT Address"
// //         value={nftAddress}
// //         onChange={(e) => setNftAddress(e.target.value)}
// //       />
// //       <input
// //         placeholder="Token ID"
// //         value={tokenId}
// //         onChange={(e) => setTokenId(e.target.value)}
// //       />
// //       <input
// //         placeholder="Duration"
// //         value={duration}
// //         onChange={(e) => setDuration(e.target.value)}
// //       />
// //       <input
// //         placeholder="Daily Fee Rate"
// //         value={dailyFeeRate}
// //         onChange={(e) => setDailyFeeRate(e.target.value)}
// //       />
// //       <input
// //         placeholder="Max Rent Days"
// //         value={maxRentDays}
// //         onChange={(e) => setMaxRentDays(e.target.value)}
// //       />
// //       <input
// //         placeholder="IPFS Hash"
// //         value={ipfsHash}
// //         onChange={(e) => setIpfsHash(e.target.value)}
// //       />
// //       <button onClick={lendNFT}>Lend NFT</button>
// //       <h2>Borrow NFT</h2>
// //       <input
// //         placeholder="Collateral Token Address"
// //         value={collateralTokenAddress}
// //         onChange={(e) => setCollateralTokenAddress(e.target.value)}
// //       />
// //       <button onClick={borrowNFT}>Borrow NFT</button>

// //       <h2>Return NFT</h2>
// //       <input
// //         placeholder="Fee Token Address"
// //         value={feeTokenAddress}
// //         onChange={(e) => setFeeTokenAddress(e.target.value)}
// //       />
// //       <button onClick={returnNFT}>Return NFT</button>
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useEffect, useState } from "react";
// import "./App.css";
// import NFTLendingForm from "./components/NFTLendingForm";
// import { ethers } from "ethers";
// // const ethers = require("ethers");

// import { contractABI, contractAddress } from "./contract-config";

// const App = () => {
//   const [provider, setProvider] = useState(null);
//   const [wallet, setWallet] = useState(null);
//   const [lendingPlatform, setLendingPlatform] = useState(null);

//   // Initialize the contract instance and wallet
//   useEffect(() => {
//     const init = async () => {
//       const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
//       setProvider(web3Provider);
//       const signer = web3Provider.getSigner();
//       setWallet(signer);
//       const contract = new ethers.Contract(
//         contractAddress,
//         contractABI,
//         signer
//       );
//       setLendingPlatform(contract);
//     };
//     init();
//   }, []);

//   const handleLendNFT = async (
//     nftAddress,
//     tokenId,
//     duration,
//     collateralAmount,
//     feeAmount
//   ) => {
//     if (!lendingPlatform) return;
//     try {
//       const tx = await lendingPlatform.lendNFT(
//         nftAddress,
//         tokenId,
//         duration,
//         collateralAmount,
//         feeAmount
//       );
//       await tx.wait();
//       console.log("NFT lent successfully");
//     } catch (error) {
//       console.error("Error lending NFT:", error);
//     }
//   };

//   const handleBorrowNFT = async (
//     nftAddress,
//     tokenId,
//     collateralTokenAddress
//   ) => {
//     if (!lendingPlatform) return;
//     try {
//       const tx = await lendingPlatform.borrowNFT(
//         nftAddress,
//         tokenId,
//         collateralTokenAddress
//       );
//       await tx.wait();
//       console.log("NFT borrowed successfully");
//     } catch (error) {
//       console.error("Error borrowing NFT:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>NFT Lending Platform</h1>
//       <NFTLendingForm title="Lend NFT" onSubmit={handleLendNFT} />
//       <NFTLendingForm title="Borrow NFT" onSubmit={handleBorrowNFT} />
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import "./App.css";
import NFTLendingForm from "./components/NFTLendingForm";
import NFTList from "./components/NFTList";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "./contract-config";

const App = () => {
  const [provider, setProvider] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [lendingPlatform, setLendingPlatform] = useState(null);

  // Initialize the contract instance and wallet
  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(web3Provider);
        const signer = web3Provider.getSigner();
        setWallet(signer);
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setLendingPlatform(contract);
      }
    };
    init();
  }, []);

  const handleLendNFT = async (
    nftAddress,
    tokenId,
    duration,
    collateralAmount,
    feeAmount
  ) => {
    if (!lendingPlatform) return;
    try {
      const tx = await lendingPlatform.lendNFT(
        nftAddress,
        tokenId,
        duration,
        collateralAmount,
        feeAmount
      );
      await tx.wait();
      console.log("NFT lent successfully");
    } catch (error) {
      console.error("Error lending NFT:", error);
    }
  };

  const handleBorrowNFT = async (
    nftAddress,
    tokenId,
    collateralTokenAddress
  ) => {
    if (!lendingPlatform) return;
    try {
      const tx = await lendingPlatform.borrowNFT(
        nftAddress,
        tokenId,
        collateralTokenAddress
      );
      await tx.wait();
      console.log("NFT borrowed successfully");
    } catch (error) {
      console.error("Error borrowing NFT:", error);
    }
  };

  return (
    <div className="App">
      <header className="app-header"></header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/lend">Lend NFT</Link>
        <Link to="/borrow">Borrow NFT</Link>
      </nav>
      <ConnectButton wallet={wallet} setWallet={setWallet} />
      <Routes>
        <Route
          path="/"
          element={<NFTList lendingPlatform={lendingPlatform} />}
        />
        <Route
          path="/lend"
          element={<NFTLendingForm title="Lend NFT" onSubmit={handleLendNFT} />}
        />
        <Route
          path="/borrow"
          element={
            <NFTLendingForm title="Borrow NFT" onSubmit={handleBorrowNFT} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
