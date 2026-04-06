function updateTime() {
    const timeDisplay = document.getElementById("serverTime");
    const now = new Date();
    
    // Format: HH:MM:SS
    const timeString = now.toLocaleTimeString([], { 
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    
    timeDisplay.textContent = timeString;
}

// Update every second
setInterval(updateTime, 1000);

// Run immediately on load
updateTime();