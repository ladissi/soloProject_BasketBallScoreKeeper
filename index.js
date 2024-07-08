

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