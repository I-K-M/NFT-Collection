const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const metadataURL = METADATA_URL;

  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  await deployedCryptoDevsContract.deployed();

  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exit(1);
});
