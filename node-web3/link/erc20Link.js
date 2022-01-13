let abi = require('../assets/abi')
let config = require('../config')

let tokenAddress = '0xa36085F69e2889c224210F603D836748e7dC0088'
let address = '0xcaf685540F65709079630Aa26AD06cD97D2E3357'
let Web3 = require('web3')

const web3 = new Web3(config.kovanCof.rpcURL)

function erc20() {
	let token = new web3.eth.Contract(abi, tokenAddress)
    token.methods.balanceOf(address).call((err, res) => {
        if (err === null) {
            console.log(web3.utils.fromWei(res))
        } else {
            console.log("err:", err)
        }
    })
    token.methods.totalSupply().call((err, result) => { console.log("totalSupply:", result) })
    token.methods.name().call((err, result) => {console.log("name:", result)})
    token.methods.symbol().call((err, result) => { console.log("symbol:", result) })
}

erc20()
