/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config()
require("@nomiclabs/hardhat-ethers")
module.exports = {
  solidity: "0.8.17",

  networks: {
    'goerli': {
      url: process.env.GOERLI_PROVIDER_URL,
      accounts: [`${process.env.GOERLI_PRIVATE_KEY}`]
    }
  }
};
