
// controller
let appen = document.getElementById("app");
let a = 5;
let b = 3;
let hmtl = "";
let status = "";
let restarted = ""
let blackJack = {
    playerValue: 0,
    blackJackBust: false,
    blackJackbj: false,
    blackJackAiBust: false,
    blackJackAce: 0,
    blackJack10: 0,
    blackJack9: 0,
    blackJack8: 0,
    blackJack7: 0,
    blackJack6: 0,
    blackJack5: 0,
    blackJack4: 0,
    blackJack3: 0,
    blackJack2: 0,
    blackJack1: 0,
    currentCards: [],
    currentAiCards: [],
    aiValue: 0,
    players: 1,
    winner: 0
};

updateView();
function updateView() {
    html = `
    <button onclick="spillet();startSpillet()">Trykk på meg for å starte!
    `
    appen.innerHTML = html;
}

function blackJackBusten() {
    if (blackJack.playerValue >= 22) {
        blackJack.blackjackBust = true;
    } else blackJack.blackjackBust = false;
}
function blackJackWin() {
    if (blackJack.currentCards[0] == [10] && blackJack.currentCards[1] == [11] || blackJack.currentCards[0] == [11] && blackJack.currentCards[1] == [10]) {
        blackJack.blackJackbj = true;
        return "Gratulerer du fikk blackjack!"
    } else blackJack.blackJackbj = false;
}
function stand() {
    hitRobot();
    if (blackJack.aiValue >= 18 && blackJack.playerValue < blackJack.aiValue && blackJack.aiValue <= 21) {
        status = "Du har tapt :(";
        blackJack.winner = 3;
    } else if (blackJack.aiValue >= 18 && blackJack.aiValue <= 21 && blackJack.playerValue > blackJack.aiValue) {
        blackJack.winner = 2;
        status = "Gratulerer du har vunnet";
    } if (blackJack.aiValue == blackJack.playerValue) {
        status = "Det ble uavgjort!"
        blackJack.winner = 1;
        return;
    }
    else if (blackJack.aiValue < 18) {
        hitRobot();
        stand();
    }
    restartKnapp();
    spillet();
}

function spillet() {
    html = `
    du har ${blackJack.playerValue}
    <button id="hit" onclick="hitPlayer()"/>hit
    <button id="stand" onclick="stand()">stå</button>
    ${checkIfBust() || ""}
    ${blackJackWin() || ""}
    <br/>
    Robotten har ${blackJack.aiValue}
    ${blackJackAiBusten() || ""}
    ${blackJackAiWin() || ""}
    <br/>
    ${status || ""}
    ${restarted || ""}
    `;
    appen.innerHTML = html;
}

function checkIfBust() {
    if (blackJack.blackjackBust == true) {
        blackJack.winner = 3;
        restartKnapp();
        return "Du har tapt";
    } else return;
}


function startSpillet() {
    hitPlayer();
    hitPlayer();
}

function hitPlayer() {
    let kort = Math.ceil(Math.random() * 11);

    if (blackJack.playerValue <= 22 && kort == 11) {
        blackJack.blackJackAce += 1;
    } if (blackJack.playerValue <= 22 && kort == 10) {
        blackJack.blackJack10 += 1;
    } if (blackJack.playerValue <= 22 && kort == 9) {
        blackJack.blackJack9 += 1;
    } if (blackJack.playerValue <= 22 && kort == 8) {
        blackJack.blackJack8 += 1;
    } if (blackJack.playerValue <= 22 && kort == 7) {
        blackJack.blackJack7 += 1;
    } if (blackJack.playerValue <= 22 && kort == 6) {
        blackJack.blackJack6 += 1;
    } if (blackJack.playerValue <= 22 && kort == 5) {
        blackJack.blackJack5 += 1;
    } if (blackJack.playerValue <= 22 && kort == 4) {
        blackJack.blackJack4 += 1;
    } if (blackJack.playerValue <= 22 && kort == 3) {
        blackJack.blackJack3 += 1;
    } if (blackJack.playerValue <= 22 && kort == 2) {
        blackJack.blackJack2 += 1;
    } if (blackJack.playerValue <= 22 && kort == 1) {
        blackJack.blackJack1 += 1;
    }

    blackJack.currentCards.push(kort);
    var sum = blackJack.currentCards.reduce(function (a, b) {
        return a + b;
    }, 0);
    blackJack.playerValue = sum;
    if (blackJack.playerValue >= 22) {
        blackJack.blackjackBust = true;
    }
    checkIfBust();
    blackJackWin();
    spillet();
    if (blackJack.currentAiCards.length === 0) {
        hitRobot();
    }
}

function hitRobot() {
    let aiKort = Math.ceil(Math.random() * 11);
    blackJack.currentAiCards.push(aiKort);
    var sum = blackJack.currentAiCards.reduce(function (a, b) {
        return a + b;
    }, 0);
    blackJack.aiValue = sum;
}
function blackJackAiBusten() {
    if (blackJack.aiValue >= 22) {
        blackJack.blackjackAiBust = true;
        blackJack.winner = 2;
        return "Robotten busta, du vant!";
    } else blackJack.blackjackBust = false;
}

function restart() {
    blackJack.playerValue = 0;
    blackJack.blackJackBust = false;
    blackJack.blackJackbj = false;
    blackJack.blackJackAiBust = false;
    blackJack.blackJackAce = 0;
    blackJack.blackJack10 = 0;
    blackJack.blackJack9 = 0;
    blackJack.blackJack8 = 0;
    blackJack.blackJack7 = 0;
    blackJack.blackJack6 = 0;
    blackJack.blackJack5 = 0;
    blackJack.blackJack4 = 0;
    blackJack.blackJack3 = 0;
    blackJack.blackJack2 = 0;
    blackJack.blackJack1 = 0;
    blackJack.currentCards = [];
    blackJack.currentAiCards = [];
    blackJack.aiValue = 0;
    blackJack.players = 1;
    blackJack.winner = 0;
    hmtl = "";
    status = "";
    restarted = ""
    startSpillet();
    spillet();
}

function blackJackAiWin() {
    if (blackJack.currentAiCards[0] == [10] && blackJack.currentAiCards[1] == [11] || blackJack.currentAiCards[0] == [11] && blackJack.currentAiCards[1] == [10]) {
        blackJack.blackJackAibj = true;
        return "desverre fikk robotten blackjack!"
    } else blackJack.blackJackAibj = false;
}
function restartKnapp() {
    if (blackJack.winner >= 1) {
        restarted = `
        <button onclick="restart()">Start på nytt?</button>
        `
    } else return;
}