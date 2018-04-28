require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      gasPrice: 1,
      network_id: "*" // Match any network id
    },

    rinkeby: {  // testnet
      host: "localhost",
      port: 8547,
      network_id: 4
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }

};
