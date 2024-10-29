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
    