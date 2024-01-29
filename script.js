// script.js

let resources = 0;
let coins = 0;
let miningRate = 1;
let upgradeCost = 10;
let minerCost = 50;
let miners = 0;
let exploredPlanets = 0;

const planetContainer = document.getElementById('planetContainer');
const resourceCount = document.getElementById('resourceCount');
const coinCount = document.getElementById('coinCount');
const minerCount = document.getElementById('minerCount');
const mineButton = document.getElementById('mineButton');
const buyUpgradeButton = document.getElementById('buyUpgradeButton');
const exploreButton = document.getElementById('exploreButton');

// Import the renderPlanets function from planetary.js
// Make sure to include planetary.js script in your HTML file before script.js
// <script src="planetary.js"></script>
// <script src="script.js"></script>

// Import the renderPlanets function from planetary.js
// Make sure to include planetary.js script in your HTML file before script.js
// <script src="planetary.js"></script>
// <script src="script.js"></script>
function mine() {
    resources += miningRate * (miners + 1);
    updateDisplay();
}

function buyUpgrade() {
    if (coins >= upgradeCost) {
        coins -= upgradeCost;
        miningRate *= 2;
        upgradeCost *= 2;
        updateDisplay();
    } else {
        alert("Not enough coins to buy the upgrade!");
    }
}

function buyMiner() {
    if (coins >= minerCost) {
        coins -= minerCost;
        miners += 1;
        minerCost += 50;
        updateDisplay();
    } else {
        alert("Not enough coins to buy a miner!");
    }
}

function exploreNewPlanet() {
    if (resources >= 100) {
        resources -= 100;
        exploredPlanets += 1;
        miningRate += 1;
        updateDisplay();
        renderPlanets(exploredPlanets, planetContainer);
    } else {
        alert("Not enough resources to explore a new planet!");
    }
}

function updateDisplay() {
    resourceCount.textContent = resources;
    coinCount.textContent = coins;
    minerCount.textContent = miners;
}

// Automatic resource generation every second
setInterval(() => {
    resources += miningRate * miners;
    updateDisplay();
}, 1000);

// Automatic coin generation every 5 seconds
setInterval(() => {
    coins += 1;
    updateDisplay();
}, 5000);

mineButton.addEventListener('click', mine);
buyUpgradeButton.addEventListener('click', buyUpgrade);
exploreButton.addEventListener('click', exploreNewPlanet);
