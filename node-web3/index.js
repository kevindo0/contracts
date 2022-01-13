let config = require("./config");
console.log(config.rpcURL)

const Web3 = require('web3')
const web3 = new Web3(config.rpcURL)
// const address = '0xcaf685540F65709079630Aa26AD06cD97D2E3357' // 账户地址
// 读取address中的余额，余额单位是wei
web3.eth.getBalance(address, (err, wei) => {
    // 余额单位从wei转换为ether
    balance = web3.utils.fromWei(wei, 'ether')
    console.log("balance: " + balance)
})