const { getStake } = require("./storage");
const { rewardRate } = require("./config");

function getReward(user) {
  const base = getStake(user);
  const reward = base * rewardRate;
  return base + reward;
}

module.exports = {
  getReward
};
