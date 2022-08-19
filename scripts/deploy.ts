import { ethers } from "hardhat";

async function main() {
  
  
  const VAuction = await ethers.getContractFactory("Aunction");
  const biddedAunction = await VAuction.deploy();

  await biddedAunction.deployed();

  console.log(`Auction Address: ${biddedAunction.address}`);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
