function openModal(imgElement) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = imgElement.src;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Créer un cookie nommé "userConsent"
setCookie("userConsent", "accepted", 365);

//Pour gérer le consentement :
document.getElementById("accept-cookies").addEventListener("click", function () {
    setCookie("userConsent", "accepted", 365);
    document.getElementById("cookie-banner").style.display = "none";
});

document.getElementById("decline-cookies").addEventListener("click", function () {
    setCookie("userConsent", "declined", 365);
    document.getElementById("cookie-banner").style.display = "none";
});

//Si le consentement a déjà été donné ou refusé, masquez le bandeau.
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Cacher le bandeau si le consentement est déjà donné
if (getCookie("userConsent")) {
    document.getElementById("cookie-banner").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll('.section'); // Sélectionne les sections avec la classe .section
        
        // Fonction pour révéler la section
        const revealSection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible'); // Ajoute la classe pour rendre visible
                    observer.unobserve(entry.target); // Arrête d'observer une fois visible
                }
            });
        };

        // Crée un IntersectionObserver pour déclencher les animations
        const observer = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.1
        });

        // Observes chaque section
        sections.forEach(section => {
            observer.observe(section);
        });
    });


    document.addEventListener("DOMContentLoaded", function() {
        const menuToggle = document.querySelector(".menu-toggle");
        const menuItems = document.querySelector(".menu-items");
    
        menuToggle.addEventListener("click", function() {
            menuItems.classList.toggle("menu-visible");
            console.log("Menu toggle clicked");  // Vérifie que le clic est détecté
        });
    });
<<<<<<< HEAD

    
=======
    
>>>>>>> e233f5098222b75f3f324bff2a8c2f44f7b908f7
