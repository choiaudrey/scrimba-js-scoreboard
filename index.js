let homeCount = 0
let guestCount = 0
document.getElementById("home-el").textContent = homeCount
document.getElementById("guest-el").textContent = guestCount

function homeAdd1() {
    homeCount += 1;
    document.getElementById("home-el").textContent = homeCount
}

function homeAdd2() {
    homeCount += 2;
    document.getElementById("home-el").textContent = homeCount
}

function homeAdd3() {
    homeCount += 3;
    document.getElementById("home-el").textContent = homeCount
}

function guestAdd1() {
    guestCount += 1;
    document.getElementById("guest-el").textContent = guestCount
}

function guestAdd2() {
    guestCount += 2;
    document.getElementById("guest-el").textContent = guestCount
}

function guestAdd3() {
    guestCount += 3;
    document.getElementById("guest-el").textContent = guestCount
}

function homeReset() {
    homeCount = 0;
    document.getElementById("home-el").textContent = homeCount;
}


function guestReset() {
    guestCount = 0;
    document.getElementById("guest-el").textContent = guestCount;
}

    