const app = document.getElementById('app');

function createElements() {
    // Container
    const container = document.createElement('div');
    container.className = 'container';

    // Nav
    const nav = document.createElement('nav');
    nav.className = 'nav';
    const title = document.createElement('h1');
    title.textContent = 'Counter App';
    nav.appendChild(title);

    // Counter Display
    const display = document.createElement('div');
    display.className = 'display';
    const value = document.createElement('span');
    value.id = 'value';
    value.textContent = '0';
    display.appendChild(value);

    // Buttons Container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';

    // Decrement Button
    const decrementBtn = document.createElement('button');
    decrementBtn.id = 'decrement';
    decrementBtn.textContent = '-';
    decrementBtn.className = 'btn';

    // Increment Button
    const incrementBtn = document.createElement('button');
    incrementBtn.id = 'increment';
    incrementBtn.textContent = '+';
    incrementBtn.className = 'btn';

    // Reset Button
    const resetBtn = document.createElement('button');
    resetBtn.id = 'reset';
    resetBtn.textContent = 'Reset';
    resetBtn.className = 'btn reset';

    // Append buttons
    buttonsContainer.appendChild(decrementBtn);
    buttonsContainer.appendChild(incrementBtn);
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'controls-container';
    controlsContainer.appendChild(resetBtn);

    // History Display
    const history = document.createElement('div');
    history.id = 'history';
    history.className = 'history';

    // Keyboard Info and Back Link
    const keyboardInfo = document.createElement('p');
    keyboardInfo.className = 'keyboard-info';
    keyboardInfo.textContent = 'Use arrow keys or +/- to control. Press R to reset';
    
    const backLink = document.createElement('a');
    backLink.href = 'https://antonioperrotta.netlify.app/';
    backLink.className = 'back-link';
    backLink.textContent = 'Back to Site';

    // Footer
    const footer = document.createElement('footer');
    footer.className = 'footer';
    const footerText = document.createElement('p');
    footerText.textContent = `© ${new Date().getFullYear()} Antonio Perrotta. All rights reserved.`;
    footer.appendChild(footerText);

    // Append all elements
    container.appendChild(nav);
    container.appendChild(display);
    container.appendChild(buttonsContainer);
    container.appendChild(controlsContainer);
    container.appendChild(history);
    container.appendChild(keyboardInfo);
    container.appendChild(backLink);
    container.appendChild(footer);
    app.appendChild(container);
}

// Initialize app
createElements();

// State Management
let count = 0;
let history = [];

// DOM Elements
const value = document.getElementById('value');
const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');
const historyElement = document.getElementById('history');

// Counter Functions
function updateDisplay() {
    value.textContent = count;
    updateHistory();
}

function updateHistory() {
    history = history.slice(-5);
    historyElement.innerHTML = history
        .map(item => `<div class="history-item ${item.type}">${item.value}</div>`)
        .join('');
}

function animateValue(type) {
    value.className = `animated ${type}`;
    setTimeout(() => value.className = '', 300);
}

function increment() {
    count++;
    history.push({ value: count, type: 'increment' });
    updateDisplay();
    animateValue('increment');
}

function decrement() {
    count--;
    history.push({ value: count, type: 'decrement' });
    updateDisplay();
    animateValue('decrement');
}

function reset() {
    count = 0;
    history.push({ value: count, type: 'reset' });
    updateDisplay();
    animateValue('reset');
}

// Event Listeners
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
resetBtn.addEventListener('click', reset);

// Keyboard Controls
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === '+') {
        increment();
    } else if (e.key === 'ArrowDown' || e.key === '-') {
        decrement();
    } else if (e.key.toLowerCase() === 'r') {
        reset();
    }
});