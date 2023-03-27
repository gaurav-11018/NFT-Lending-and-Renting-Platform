# NFT-Lending-and-Renting-Platform

<!--
Hey babe if you are reading this just know that I love you

Babe! I had the widest smile when I read this now. Absolutely took me by surprise, I love you sooo much ♥️ -->

<!-- COntract deployed at testnet-mumbai-polygon: 0xb90ba369335aBA8e6C5F21D7A4283cCF30b99932 -->
## NFT Lending and Renting Platform
This project is a decentralized NFT Lending and Renting Platform built on the Ethereum network. Users can lend their NFTs to other users in exchange for collateral and daily fees. The platform enables NFT owners to monetize their assets and borrowers to temporarily use NFTs without having to purchase them.

## The problem NFT Lending and Renting Platform solves
Tracks: Best hack built on Ethereum , Best hack built on Ethereum + Polygon , Best use of Filecoin and/or IPFS,Best use of decentralized storage using filecoin,Build Scalable Decentralized application on Shardeum

The NFT Lending and Renting Platform addresses several challenges faced by the NFT ecosystem and its participants. Here's a breakdown of the problems it solves and the 
benefits it provides:

1.Monetization of NFTs: NFT holders can now lend their assets to earn passive income without having to sell them. This allows for better monetization of NFTs and helps 
owners maximize the value of their digital assets.

2.Access to valuable NFTs: Borrowers can temporarily access valuable NFTs for various purposes, such as participating in virtual gaming experiences, digital art 
exhibitions, or other creative projects. This promotes a more inclusive and dynamic NFT ecosystem.

3.Lower barriers to entry: By providing a user-friendly platform that simplifies the lending and borrowing process, more people can easily participate in the NFT market, lowering the barriers to entry for newcomers.

4.Reduced transaction costs: By leveraging the Polygon Mumbai Testnet and the Shardeum network, our platform offers lower gas fees and faster transaction times, making the lending and borrowing process more cost-effective for all users.

5.Cross-chain compatibility: With the deployment of our smart contract on the Polygon Mumbai Testnet and the display of testnet NFTs from the Ethereum network, our platform demonstrates cross-chain compatibility, making it adaptable to various blockchain networks in the future.

Our NFT Lending and Renting Platform makes it easier for NFT holders to monetize their assets, provides borrowers with access to valuable NFTs, and fosters a more inclusive and sustainable NFT ecosystem. By addressing these challenges, the platform enhances the overall user experience and promotes the growth and adoption of NFTs in various industries.

## Smart Contract
The platform's core logic is implemented in the NFTLendingPlatform smart contract, which is written in Solidity. The contract is deployed on the Ethereum network, specifically on the Polygon Mumbai Testnet.

### Functions
The NFTLendingPlatform contract provides the following functions:

#### lendNFT
This function allows users to lend their NFTs by specifying the NFT address, token ID, loan duration, collateral amount, daily fee amount, maximum rent days, and IPFS CID for additional information. The NFT is transferred to the contract, and the loan is created and stored in the loans mapping.

### borrowNFT
This function allows users to borrow an NFT by providing the NFT address, token ID, and collateral token address. The borrower must have sufficient collateral and allowance to cover the collateral amount. The collateral is transferred to the lender, and the loan is updated with the borrower's address and start time.

### returnNFT
This function allows borrowers to return the borrowed NFT by providing the NFT address, token ID, and fee token address. The borrower must have sufficient fee balance and allowance to cover the total fee amount. The fees are transferred to the lender, and the loan is updated to remove the borrower and reset the start time.

#### retrieveNFT
This function allows lenders to retrieve their NFTs by providing the NFT address and token ID. The NFT must not be currently borrowed, and the loan must be marked as active. The NFT is transferred back to the lender, and the loan is marked as inactive.

#### withdrawCollateral
This function allows users to withdraw collateral by providing the collateral token address and the amount. The user must have sufficient collateral balance in the contract to cover the withdrawal amount.

## Frontend
The frontend is built using React and consists of several components that provide a user-friendly interface for interacting with the platform.

## Components
App: The main component that contains the application's routing and state management.
ConnectButton: A button component for connecting the user's wallet to the platform.
NFTLendingForm: A reusable form component for both lending and borrowing NFTs.
NFTList: A component that displays a list of available NFTs for lending and borrowing.

## Technologies Used
Ethereum: The platform is built on the Ethereum network and deployed on the Polygon Mumbai Testnet.
IPFS: The InterPlanetary File System (IPFS) is used to store the lending data and additional information related to the NFTs.
Solidity: The NFTLendingPlatform smart contract is written in Solidity.

## Project is listed on Devfolio : https://devfolio.co/projects/nft-lending-and-renting-platform-9da9


Pictures of the Dapp:

![prject](https://user-images.githubusercontent.com/79459872/228036025-5d4ae33f-c22a-4485-97d0-186deeb907c1.png)


![a](https://user-images.githubusercontent.com/79459872/228036066-89f3ff48-21e8-4ed1-80c2-4bec890c18cc.png)


![b](https://user-images.githubusercontent.com/79459872/228036095-bae920ca-dd96-4f55-9920-a29d17f65ae8.png)

![v](https://user-images.githubusercontent.com/79459872/228036119-c78b7274-7154-4b42-a81b-ea20defa941a.png)




