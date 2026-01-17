let totalStaked = 0;

function addToPool(amount) {
  totalStaked += amount;
}

function getPoolSize() {
  return totalStaked;
}

module.exports = {
  addToPool,
  getPoolSize
};
