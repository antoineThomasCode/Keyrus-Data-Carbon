console.log('connected')

    // Masquer les commandes de contrôle vidéo
    var video = document.getElementById("myVideo");
    video.controls = false;

    // Mettre la vidéo en mode plein écran
    function toggleFullScreen() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome, Safari, etc.
        }
    }

    // Activer le mode plein écran lors du chargement de la page
    video.addEventListener("loadedmetadata", function() {
        toggleFullScreen();
    });
