// Verification initialisation
console.log("Aquastade publicite chargee");

// Compteur animé
function animateCounter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 500 : -500;
    let stepTime = Math.abs(Math.floor(duration / (range / increment)));

    let timer = setInterval(function() {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        obj.textContent = current.toLocaleString("fr-FR");
    }, stepTime);
}

// Lancement du compteur
document.addEventListener("DOMContentLoaded", () => {
    animateCounter("counter", 0, 25000, 2500);

    // Relance l'animation du compteur toutes les 15 secondes pour l'écran d'affichage
    setInterval(() => {
        animateCounter("counter", 0, 25000, 2500);
    }, 15000);
});
