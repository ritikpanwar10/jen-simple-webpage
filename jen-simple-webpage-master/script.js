// Counter functionality
let count = 0;
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
});

decrementButton.addEventListener('click', () => {
    count--;
    countElement.textContent = count;
});

// Clock functionality
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    timeElement.textContent = `Current time: ${now.toLocaleTimeString()}`;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call