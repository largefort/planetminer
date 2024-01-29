// planetary.js

// Function to render planets
function renderPlanets(exploredPlanets, planetContainer) {
    planetContainer.innerHTML = ''; // Clear existing planets
    for (let i = 0; i < exploredPlanets; i++) {
        const planetDiv = document.createElement('div');
        planetDiv.className = 'planet';
        planetContainer.appendChild(planetDiv);
    }
}
