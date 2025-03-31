import { ethers } from "hardhat";

async function main() {
  console.log("Starting deployment of Croak Clash contracts...");

  // Deploy CroakToken
  console.log("Deploying CroakToken...");
  const CroakToken = await ethers.getContractFactory("CroakToken");
  const croakToken = await CroakToken.deploy();
  await croakToken.waitForDeployment();
  console.log(`CroakToken deployed to ${croakToken.target}`);

  // Deploy FrogNFT
  console.log("Deploying FrogNFT...");
  const FrogNFT = await ethers.getContractFactory("FrogNFT");
  const frogNFT = await FrogNFT.deploy();
  await frogNFT.waitForDeployment();
  console.log(`FrogNFT deployed to ${frogNFT.target}`);

  // Deploy CroakClash
  console.log("Deploying CroakClash...");
  const CroakClash = await ethers.getContractFactory("CroakClash");
  const croakClash = await CroakClash.deploy(
    await croakToken.getAddress(),
    await frogNFT.getAddress()
  );
  await croakClash.waitForDeployment();
  console.log(`CroakClash deployed to ${croakClash.target}`);

  // Set game contract addresses
  console.log("Setting game contract addresses...");
  await croakToken.setGameContract(await croakClash.getAddress());
  await frogNFT.setGameContract(await croakClash.getAddress());
  console.log("Game contract addresses set successfully");

  console.log("\nDeployment Summary:");
  console.log("------------------");
  console.log(`CroakToken: ${croakToken.target}`);
  console.log(`FrogNFT: ${frogNFT.target}`);
  console.log(`CroakClash: ${croakClash.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
