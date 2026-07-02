function show() {

    document.getElementById("s").style.display = "block";

    document.getElementById("surpriseBtn").style.display = "none";

    const music = document.getElementById("bgMusic");

    music.play().catch(function(error){
        console.log(error);
    });

}

// Unlock on July 3, 2026 at 12:00 AM
const unlockDate = new Date("2026-07-03T00:00:00").getTime();

const countdown = document.getElementById("countdown");
const content = document.getElementById("lockedContent");
const timer = document.getElementById("timer");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = now - now;

    if (distance <= 0) {
        countdown.style.display = "none";
        content.style.display = "block";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `
        ${days} Days<br>
        ${hours} Hours<br>
        ${minutes} Minutes<br>
        ${seconds} Seconds
    `;
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);
