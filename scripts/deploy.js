const hre = require("hardhat")
// const { Framework } = require("@superfluid-finance/sdk-core")
require("dotenv").config()
//to run this script:
//1) Make sure you've created your own .env file
//2) Make sure that you have your network specified in hardhat.config.js
//3) run: npx hardhat run scripts/deploy.js --network goerli
async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');
    
    // We get the contract to deploy
    const PureToken = await hre.ethers.getContractFactory("PureSuperToken")
    //deploy the money router account using the proper host address and the address of the first signer
    const pureToken = await PureToken.deploy()

    await pureToken.deployed()

    setInterval(() => 30000)


    console.log("Pure Token deployed to:", pureToken.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
    console.error(error)
    process.exitCode = 1
})
