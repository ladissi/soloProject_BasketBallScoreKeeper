

function updateHomeScore(val) {
    score = document.getElementById("homeScore").textContent;
    val = Number(val);
    let num = Number(score);
    num += val;
    document.getElementById("homeScore").textContent = num;
}

function resetHome() {
    document.getElementById("homeScore").textContent = 0;

}

function updateGuestScore(val) {
    score = document.getElementById("guestScore").textContent;
    val = Number(val);
    let num = Number(score);
    num += val;
    document.getElementById("guestScore").textContent = num;
}

function resetGuest() {
    document.getElementById("guestScore").textContent = 0;
}

function updateGreen() {
    document.body.style.background = "#064E3B";
    document.documentElement.style.background = "#064E3B";
}

function updateBlue() {
    document.body.style.background = "#0C4A6E";
    document.documentElement.style.background = "#0C4A6E";
    }


function updateRed() {
    document.body.style.background = "#881337";
    document.documentElement.style.background = "#881337";
}

function updateRandom() {
    let ranOne = getRandomColor();
    document.body.style.background = ranOne;
    document.documentElement.style.background = ranOne;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        }

