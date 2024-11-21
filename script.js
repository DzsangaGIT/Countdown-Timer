// Real-time timer
function updateClock() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('hu-HU');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clockDisplay').textContent = `${formattedDate} ${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

let stopwatchTime = 0;
let stopwatchInterval;

function updateStopwatchDisplay() {
    const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor(stopwatchTime % 3600 / 60)).padStart(2, '0');
    const seconds = String(stopwatchTime % 60).padStart(2, '0');
    document.getElementById('stopwatchDisplay').textContent = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatchDisplay();
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    updateStopwatchDisplay();
}

let countdownInterval;

function startCountdown() {
    clearInterval(countdownInterval);
    const targetDate = new Date(document.getElementById('countdownTarget').value);
    if (isNaN(targetDate)) return alert("Érvényes dátumot adj meg kérlek!");

    countdownInterval = setInterval(() => {
        const now = new Date();
        const remaining = targetDate - now;
        if (remaining <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdownDisplay').textContent = "Time's up!";
            return;
        }

        const years = Math.floor(remaining / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((remaining % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const weeks = Math.floor((remaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((remaining % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = String(Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((remaining % (1000 * 60)) / 1000)).padStart(2, '0');

        let countdownString = '';
        if (years > 0) countdownString += `${years} év `;
        if (months > 0) countdownString += `${months} hónap `;
        if (weeks > 0) countdownString += `${weeks} hét `;
        if (days > 0) countdownString += `${days} nap `;
        countdownString += `${hours}:${minutes}:${seconds}`;

        document.getElementById('countdownDisplay').textContent = countdownString.trim();
    }, 1000);
}
