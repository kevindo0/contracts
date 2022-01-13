let config = require('./config')
const Web3 = require('web3')
const web3 = new Web3(config.rpcURL)

// 查询最新区块
web3.eth.getBlockNumber().then(console.log)
