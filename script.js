// Fonction pour ouvrir un modal (ne modifiez pas cette partie)
function openModal(imgElement) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = imgElement.src;
}

// Fonction pour fermer un modal (ne modifiez pas cette partie)
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Fonction pour définir un cookie (garder cette partie)
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
}

// Fonction pour lire un cookie (garder cette partie)
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
}

// Encapsuler tout dans DOMContentLoaded pour s'assurer que le DOM est chargé
document.addEventListener("DOMContentLoaded", function () {
    // Gestion de la bannière des cookies
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");
    const banner = document.getElementById("cookie-banner");

    // Vérifie si le consentement existe déjà
    const userConsent = getCookie("userConsent");

    if (userConsent) {
        // Si le consentement a déjà été donné/refusé, cacher la bannière
        if (banner) banner.style.display = "none";
    } else {
        // Ajouter les gestionnaires d'événements aux boutons (uniquement si la bannière est présente)
        if (acceptButton) {
            acceptButton.addEventListener("click", function () {
                setCookie("userConsent", "accepted", 365);
                if (banner) banner.style.display = "none";
            });
        }

        if (declineButton) {
            declineButton.addEventListener("click", function () {
                setCookie("userConsent", "declined", 365);
                if (banner) banner.style.display = "none";
            });
        }
    }

    // Animation des sections
    const sections = document.querySelectorAll(".section"); // Sections avec la classe .section

    const revealSection = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
                observer.unobserve(entry.target); // Arrête d'observer une fois visible
            }
        });
    };

    const observer = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.1,
    });

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Gestion du menu (ne modifiez pas cette partie)
    const menuToggle = document.querySelector(".menu-toggle");
    const menuItems = document.querySelector(".menu-items");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            if (menuItems) {
                menuItems.classList.toggle("menu-visible");
                console.log("Menu toggle clicked");
            }
        });
    }
});
