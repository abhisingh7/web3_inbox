// Run command to install solidity compiler
// npm install solc@<your solidity compilerversion>
const path = require('path'); // It will give path to the root project directory i.e inbox
const fs = require('fs');
const solc = require('solc');

// This will generate path to Inbox.sol
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// reading contents of the file
const source = fs.readFileSync(inboxPath, 'utf-8');

//console.log(solc.compile(source,1));
// Making this compiled file available to other files in our project so we're exporting.
module.exports = solc.compile(source,1).contracts[':Inbox'];