function digitalClock() {
    var clock = document.getElementById('clock');
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
        
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
      
setInterval(digitalClock, 1000);
digitalClock();