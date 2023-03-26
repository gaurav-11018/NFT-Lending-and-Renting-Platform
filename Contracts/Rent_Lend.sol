// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTLendingPlatform {
    struct Loan {
        address lender;
        address borrower;
        uint256 tokenId;
        uint256 startTime;
        uint256 duration;
        uint256 collateralAmount;
        uint256 dailyFeeAmount;
        uint256 maxRentDays;
        bool isActive;
        string ipfsCID;
    }

    mapping(address => mapping(uint256 => Loan)) public loans;

    function lendNFT(
        address nftAddress,
        uint256 tokenId,
        uint256 duration,
        uint256 collateralAmount,
        uint256 dailyFeeAmount,
        uint256 maxRentDays,
        string memory ipfsCID
    ) external {
        IERC721 nft = IERC721(nftAddress);
        require(nft.ownerOf(tokenId) == msg.sender, "Not the owner of the NFT");

        nft.transferFrom(msg.sender, address(this), tokenId);

        loans[nftAddress][tokenId] = Loan({
            lender: msg.sender,
            borrower: address(0),
            tokenId: tokenId,
            startTime: 0,
            duration: duration,
            collateralAmount: collateralAmount,
            dailyFeeAmount: dailyFeeAmount,
            maxRentDays: maxRentDays,
            isActive: true,
            ipfsCID: ipfsCID
        });
    }

    function borrowNFT(
        address nftAddress,
        uint256 tokenId,
        address collateralTokenAddress
    ) external {
        Loan storage loan = loans[nftAddress][tokenId];
        require(loan.isActive, "Loan is not active");
        require(loan.borrower == address(0), "NFT is already borrowed");

        IERC20 collateralToken = IERC20(collateralTokenAddress);
        require(
            collateralToken.balanceOf(msg.sender) >= loan.collateralAmount,
            "Insufficient collateral balance"
        );
        require(
            collateralToken.allowance(msg.sender, address(this)) >=
                loan.collateralAmount,
            "Collateral allowance insufficient"
        );

        collateralToken.transferFrom(
            msg.sender,
            loan.lender,
            loan.collateralAmount
        );

        loan.borrower = msg.sender;
        loan.startTime = block.timestamp;
    }

    function returnNFT(
        address nftAddress,
        uint256 tokenId,
        address feeTokenAddress
    ) external {
        Loan storage loan = loans[nftAddress][tokenId];
        require(loan.isActive, "Loan is not active");
        require(loan.borrower == msg.sender, "Not the borrower");

        require(
            block.timestamp <= loan.startTime + loan.duration,
            "Loan duration exceeded"
        );

        IERC20 feeToken = IERC20(feeTokenAddress);
        uint256 totalFeeAmount = loan.dailyFeeAmount * loan.maxRentDays;
        require(
            feeToken.balanceOf(msg.sender) >= totalFeeAmount,
            "Insufficient fee balance"
        );
        require(
            feeToken.allowance(msg.sender, address(this)) >= totalFeeAmount,
            "Fee allowance insufficient"
        );

        feeToken.transferFrom(msg.sender, loan.lender, totalFeeAmount);

        loan.borrower = address(0);
        loan.startTime = 0;
    }

    function retrieveNFT(address nftAddress, uint256 tokenId) external {
        Loan storage loan = loans[nftAddress][tokenId];
        require(loan.isActive, "Loan is not active");
        require(loan.lender == msg.sender, "Not the lender");
        require(loan.borrower == address(0), "NFT is still borrowed");

        IERC721(nftAddress).transferFrom(address(this), msg.sender, tokenId);
        loan.isActive = false;
    }

    function withdrawCollateral(
        address collateralTokenAddress,
        uint256 amount
    ) external {
        IERC20 collateralToken = IERC20(collateralTokenAddress);
        require(
            collateralToken.balanceOf(address(this)) >= amount,
            "Insufficient collateral balance"
        );

        collateralToken.transfer(msg.sender, amount);
    }
}
