

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/q0dDmrESSxfdqKLdyKQBdXw-5d8kYoyo',
      accounts: ['1664cc765c434b651eff197375ce8887516e1739b16c0e1f2e2ea2347ba43172']
    }
  }
};