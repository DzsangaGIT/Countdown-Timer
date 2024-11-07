// Real-time timer
function updateClock(){
   const now = new Date();
   document.getElementById('clockDisplay').textContent = now.toLocaleDateString();
}
setInterval(updateClock, 1000);

let stopwatchTime = 0;
let stopwatchInterval;

function updateStopwatchDisplay(){
    const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor(stopwatchTime % 3600 / 60)).padStart(2, '0');
    const seconds = String(stopwatchTime % 60).padStart(2, '0');
    document.getElementById('stopwatchDisplay').textContent = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch(){
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime ++;
            updateStopwatchDisplay();
        }, 1000);
    }
}

function stopStopwatch(){
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch(){
    stopStopwatch();
    stopwatchTime = 0;
    updateStopwatchDisplay();
}

let countdownInterval;

function startCountdown() { 
    clearInterval(countdownInterval); 
    const targetDate = new Date(document.getElementById('countdownTarget').value); 
    if (isNaN(targetDate)) return alert("Please set a valid date!"); 

    countdownInterval = setInterval(() => { const now = new Date(); 
        const remaining = targetDate - now; if (remaining <= 0) { 
            clearInterval(countdownInterval); 
            document.getElementById('countdownDisplay').textContent = "Time's up!"; 
            return; } 
            
            const months = String(Math.floor(remaining / (1000 * 60 * 60 * 24 * 30))).padStart(2, '0'); 
            const days = String(Math.floor((remaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))).padStart(2, '0'); 
            const hours = String(Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'); 
            const minutes = String(Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'); 
            const seconds = String(Math.floor((remaining % (1000 * 60)) / 1000)).padStart(2, '0'); 
            
            document.getElementById('countdownDisplay').textContent = `${months} hónap ${days} nap ${hours}:${minutes}:${seconds}`; }, 1000); 
        
        }


