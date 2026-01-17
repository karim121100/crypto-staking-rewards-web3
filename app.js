const { stakeToken } = require("./stake");
const { getReward } = require("./reward");
const { logInfo } = require("./logger");

const userWallet = "0xUserWalletHere";

function startApp() {
  logInfo("Starting Crypto Staking System");

  stakeToken(userWallet, 200);
  const total = getReward(userWallet);

  logInfo("Total Balance with Rewards: " + total + " TOKEN");
}

startApp();
