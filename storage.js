const stakes = {};

function saveStake(user, amount) {
  if (!stakes[user]) {
    stakes[user] = 0;
  }
  stakes[user] += amount;
}

function getStake(user) {
  return stakes[user] || 0;
}

module.exports = {
  saveStake,
  getStake
};
