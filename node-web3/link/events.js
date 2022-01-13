let Web3 = require('web3')
let config = require('../config')

let abi = require('./event-abi')
let contractAddress = '0x7BdC039b18C5DDD83A13A0cFc05A19AA38d3ecB7'

// const eventProvider = new Web3.providers.WebsocketProvider(config.kovanCof.wsURL)
// web3 = new Web3()
// web3.setProvider(eventProvider)

web3 = new Web3(config.kovanCof.wsURL)

function eventListen() {
    contract = new web3.eth.Contract(abi, contractAddress)
    contract.events.valueChange({}, function(error, event){
        console.log('error:', error)
        console.log('event:', event)
    })
    .on("connected", function(subscriptionId) {
        console.log("subscriptionId:", subscriptionId)
    })
    .on("changed", function(event) {
        console.log("changed:", event)
    })
    .on("error", function(error, receipt) {
        console.log(error, receipt);
    });
}

eventListen()
