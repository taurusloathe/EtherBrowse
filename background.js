// Import the Ethereum mining library
import * as EthMiningLibrary from './EthMiningLibrary.js';

// Function to start mining Ethereum
function startMining() {
  EthMiningLibrary.startMining();
}

// Function to stop mining Ethereum
function stopMining() {
  EthMiningLibrary.stopMining();
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'startMining') {
    startMining();
  } else if (message.action === 'stopMining') {
    stopMining();
  }
});
