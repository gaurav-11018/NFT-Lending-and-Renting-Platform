require('dotenv').config();
const ethers = require('ethers');

const contractABI = [...]; 
const contractAddress = '...'; 

const ethProviderUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
const ethPrivateKey = process.env.ETH_PRIVATE_KEY;
const ethProvider = new ethers.providers.JsonRpcProvider(ethProviderUrl);
const ethWallet = new ethers.Wallet(ethPrivateKey, ethProvider);

const polygonProviderUrl = process.env.POLYGON_RPC_URL;
const polygonPrivateKey = process.env.POLYGON_PRIVATE_KEY;
const polygonProvider = new ethers.providers.JsonRpcProvider(polygonProviderUrl);
const polygonWallet = new ethers.Wallet(polygonPrivateKey, polygonProvider);

const wallet = ethWallet; // or polygonWallet

const lendingPlatform = new ethers.Contract(contractAddress, contractABI, wallet);

async function lendNFT(nftAddress, tokenId, duration, collateralAmount, feeAmount) {
  const tx = await lendingPlatform.lendNFT(nftAddress, tokenId, duration, collateralAmount, feeAmount);
  await tx.wait();
  console.log('NFT lent successfully');
}

async function borrowNFT(nftAddress, tokenId, collateralTokenAddress) {
  const tx = await lendingPlatform.borrowNFT(nftAddress, tokenId, collateralTokenAddress);
  await tx.wait();
  console.log('NFT borrowed successfully');
}

async function returnNFT(nftAddress, tokenId, feeTokenAddress) {
  const tx = await lendingPlatform.returnNFT(nftAddress, tokenId, feeTokenAddress);
  await tx.wait();
  console.log('NFT returned successfully');
}

async function retrieveNFT(nftAddress, tokenId) {
  const tx = await lendingPlatform.retrieveNFT(nftAddress, tokenId);
  await tx.wait();
  console.log('NFT retrieved successfully');
}

async function withdrawCollateral(collateralTokenAddress, amount) {
  const tx = await lendingPlatform.withdrawCollateral(collateralTokenAddress, amount);
  await tx.wait();
  console.log('Collateral withdrawn successfully');
}
