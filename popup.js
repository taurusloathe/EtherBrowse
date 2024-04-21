document.addEventListener('DOMContentLoaded', () => {
  const startMiningBtn = document.getElementById('startMiningBtn');
  const stopMiningBtn = document.getElementById('stopMiningBtn');
  const statusDiv = document.getElementById('status');

  // Send a message to background.js to start mining Ethereum
  startMiningBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'startMining' });
    statusDiv.textContent = 'Mining Ethereum started.';
  });

  // Send a message to background.js to stop mining Ethereum
  stopMiningBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'stopMining' });
    statusDiv.textContent = 'Mining Ethereum stopped.';
  });
});
