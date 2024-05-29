let Money = 0;
let Level = 0;
let MoneyToRankUp = [10, 25, 50, 75, 100];
let progressValue = 0;

let banque = document.getElementById('banque');
banque.textContent = Money + " €";

let level = document.getElementById('level');
let progress = document.getElementById('progress');
let progressBar = document.getElementById('progress');

function ClickToMoney() {
    const moneyIncrements = [1, 2, 4, 6, 8, 10];
    const increment = moneyIncrements[Level] || 1;
    Money += increment;
    UpdateBankAmount();
    incrementProgress();
    updateProgress();
}

function ClickToLvlUp() {
    if (Level < 5 && Money >= MoneyToRankUp[Level]) {
        Money -= MoneyToRankUp[Level];
        Level += 1;
        UpdateBankAmount();
        UpdateLevel();
        progressValue = 0; // Reset progress value after leveling up
        updateProgress();
        console.log("Vous venez de passer Niveau " + Level + ". Il vous manque encore: " + MoneyToRankUp[Level] + " avant de passer au niveau suivant.");
    }
}

function incrementProgress() {
    if (Level < 5 && progressValue < MoneyToRankUp[Level]) {
        progressValue += 1;
        updateProgress();
    }
}

function addXp(exp) {
    if (typeof exp === 'number' && isFinite(exp)) {
        Money += exp;
        UpdateBankAmount();
        incrementProgress();
        updateProgress();
    } else {
        console.error('Invalid XP value:', exp);
    }
}

// Fonctions qui update l'affichage HTML

function UpdateAll() {
    UpdateBankAmount();
    UpdateLevel();
    updateProgress();
}

function UpdateBankAmount() {
    banque.textContent = Money + " €";
}

function UpdateLevel() {
    level.textContent = "Niveau: " + Level;
}

function updateProgress() {
    if (Level < 5) {
        let percentage = (progressValue / MoneyToRankUp[Level]) * 100;
        if (isFinite(percentage)) {
            progressBar.value = percentage;
        } else {
            console.error('Invalid progress percentage:', percentage);
        }
    }
}
