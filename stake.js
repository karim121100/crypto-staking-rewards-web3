const { saveStake } = require("./storage");
const { isValidUser } = require("./user");

function stakeToken(user, amount) {
  if (!isValidUser(user)) {
    return false;
  }

  saveStake(user, amount);
  return true;
}

module.exports = {
  stakeToken
};
