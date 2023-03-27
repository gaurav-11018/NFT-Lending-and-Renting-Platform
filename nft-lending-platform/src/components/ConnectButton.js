// import React from "react";
// import { ethers } from "ethers";

// const ConnectButton = ({ wallet, setWallet }) => {
//   const connectWallet = async () => {
//     if (window.ethereum) {
//       await window.ethereum.request({ method: "eth_requestAccounts" });
//       const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = web3Provider.getSigner();
//       setWallet(signer);
//     }
//   };

//   return (
//     <button onClick={connectWallet}>
//       {wallet ? "Connected" : "Connect Wallet"}
//     </button>
//   );
// };

// export default ConnectButton;
import React from "react";
import "../App.css";
import { ethers } from "ethers";
const ConnectButton = ({ wallet, setWallet }) => {
  const connect = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = web3Provider.getSigner();
      setWallet(signer);
    }
  };

  return (
    <button className="rainbow-connect-button" onClick={connect}>
      {wallet ? "Connect" : "Connect"}
    </button>
  );
};

export default ConnectButton;
