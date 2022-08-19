import { ethers } from "hardhat";

async function main() {

    const [owner, user11, user12] = await ethers.getSigners();
  
  
  const VAuction = await ethers.getContractFactory("Aunction");
  const biddedAunction = await VAuction.attach("0xD7f22e731E1E0aa34f27614a9b968709FD3159c2");

  const user1 = "0xAA5AC6134633183C81436499fb38748D128e039b";
  const user2 = "0x32c8328f9407a1dF4De8D655a4C83B022D44a2f6";
  
  const user3 = "0x7A3E0DFf9B53fA0d3d1997903A48677399b22ce7";
  const earlyBid = await (await biddedAunction.connect(user2).placeEarlyBid({value: ethers.utils.parseEther(("0.1"))})).wait();
  
  console.log (earlyBid);

//   const endAuction = await biddedAunction.endAuction({});
//   console.log(endAuction);

//   const  changedOwner = await biddedAunction.changeOwner();
//   console.log(changedOwner);



  // const RecordFactory1 = await ethers.getContractAt("IREcord", 0x457937590348059);


  
  // const RecordFactory = await ethers.getContractFactory("Record");
  // const x = RecordFactory.attach("0x8693085630945803i503466");

  // x.nameOfFunction()




}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
