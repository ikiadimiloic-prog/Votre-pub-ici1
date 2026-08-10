document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. ANIMATION DU COMPTEUR DE VISITEURS
    // ==========================================
    const counterElement = document.getElementById("counter");
    
    // Valeur cible à atteindre (ex: 150 000 visiteurs par an)
    const targetValue = 150000; 
    
    // Durée totale de l'animation en millisecondes (2,5 secondes)
    const duration = 2500; 
    
    // Calcul du pas d'incrémentation à chaque rafraîchissement d'écran (~60 fps)
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    const increment = targetValue / totalFrames;
    
    let currentValue = 0;
    let currentFrame = 0;

    const animateCounter = () => {
        currentFrame++;
        currentValue += increment;

        if (currentFrame < totalFrames) {
            // Mise à jour de la valeur formatée avec espace pour les milliers (ex: 125 000)
            counterElement.textContent = Math.floor(currentValue).toLocaleString("fr-FR");
            requestAnimationFrame(animateCounter);
        } else {
            // S'assure que la valeur finale exacte est affichée
            counterElement.textContent = targetValue.toLocaleString("fr-FR");
        }
    };

    // Lancement de l'animation après un petit délai de 300ms
    setTimeout(animateCounter, 300);


    // ==========================================
    // 2. GESTION DE LA VIDÉO EN ARRIÈRE-PLAN
    // ==========================================
    const bgVideo = document.getElementById("background-video");

    if (bgVideo) {
        // Force la lecture automatique en cas de restriction du navigateur
        const playVideo = () => {
            bgVideo.play().catch(error => {
                console.warn("La lecture automatique de la vidéo a été bloquée :", error);
            });
        };

        playVideo();

        // Sécurité : Si la vidéo s'arrête (ex: perte de focus), on relance
        bgVideo.addEventListener("ended", () => {
            bgVideo.play();
        });
    }
});
