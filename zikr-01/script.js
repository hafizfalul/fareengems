// DOM Elements
const counterElement = document.getElementById('counter');
const countButton = document.getElementById('countBtn');
const resetButton = document.getElementById('resetBtn');
const lockButton = document.getElementById('lockBtn');
const lockIcon = document.getElementById('lockIcon');
const lockText = document.getElementById('lockText');

// State
let count = 0;
let isLocked = false;

// Load saved state from localStorage
function loadState() {
    const savedCount = localStorage.getItem('count');
    const savedLockState = localStorage.getItem('isLocked');
    
    if (savedCount !== null) {
        count = parseInt(savedCount);
        counterElement.textContent = count;
    }
    
    if (savedLockState !== null) {
        isLocked = savedLockState === 'true';
        updateLockState();
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('count', count);
    localStorage.setItem('isLocked', isLocked);
}

// Update UI lock state
function updateLockState() {
    countButton.disabled = isLocked;
    resetButton.disabled = isLocked;
    lockIcon.textContent = isLocked ? '🔒' : '🔓';
    lockText.textContent = isLocked ? 'Unlock' : 'Lock';
}

// Event Listeners
countButton.addEventListener('click', () => {
    if (!isLocked) {
        count++;
        counterElement.textContent = count;
        saveState();
    }
});

resetButton.addEventListener('click', () => {
    if (!isLocked) {
        count = 0;
        counterElement.textContent = count;
        saveState();
    }
});

lockButton.addEventListener('click', () => {
    isLocked = !isLocked;
    updateLockState();
    saveState();
});

// Initialize the app
loadState();
