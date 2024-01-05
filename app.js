const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
document.addEventListener('mousemove',(e)=>{
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
})

document.addEventListener("DOMContentLoaded", function () {
    var backToTopBtn = document.getElementById("backToTopBtn");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    backToTopBtn.onclick = function () {
        scrollToTop();
    };

    function scrollToTop() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentScroll - currentScroll / 10);
        }
    }
});
document.getElementById('downloadCvButton').addEventListener('click', function() {
    // Spécifiez le chemin vers votre fichier CV
    var cvFilePath = '.\\public\\docs\\CV sadi.pdf';

    // Créez un élément <a> pour le téléchargement
    var downloadLink = document.createElement('a');
    downloadLink.href = cvFilePath;
    downloadLink.download = 'CV sadi.pdf';

    // Ajoutez l'élément <a> à la page et déclenchez le téléchargement
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Supprimez l'élément <a> après le téléchargement
    document.body.removeChild(downloadLink);
});
