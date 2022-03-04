// Run command => npm install mocha ganache-cli web3
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');   // constructor
const web3 = new Web3(ganache.provider()); // instance to connect with local test network (ganache)

//Mocha is a test running framework. we can use mocha to test any kind of js code we want. 
//It is a general purpose testing framework

// code for testing mocha
// command to run test => npm run test

// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// let car;
// beforeEach(() => {
//     car = new Car();
// });

// describe('Car', () => {
//     it('can park', () => {     
//         assert.equal(car.park(), 'stopped');
//     });

//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//     });
// });

let accounts;

beforeEach(async () => {
    // Get a list of all accounts
    // Note := every function we call tied to web3 returns a promise
    // creating a promise using .then
    // web3.eth.getAccounts().then(fetchedAccounts => {
    //         console.log(fetchedAccounts);
    //     });

    // Note: when we use await then mark async in the function that contains await
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy the contract
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
    });
});