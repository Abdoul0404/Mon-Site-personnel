// Récupération du formulaire
const formulaire = document.getElementById("contactForm");

// Récupération de la zone de confirmation
const confirmation = document.getElementById("messageConfirmation");

// Détection de l'envoi du formulaire
formulaire.addEventListener("submit", function(event) {

    // Empêche la page de se recharger
    event.preventDefault();

    // Envoi du formulaire avec EmailJS
    emailjs.sendForm(
        "service_8sv9neg",
        "template_3xujvld",
        formulaire
    )
    .then(function() {

        // Message de confirmation
        confirmation.textContent =
    "✓ Message envoyé avec succès ! Merci pour votre message.";

confirmation.style.display = "block";

        // Vide le formulaire
        formulaire.reset();

    })
    .catch(function(error) {

        // Message en cas d'erreur
        confirmation.textContent =
    "✕ Une erreur est survenue. Veuillez réessayer.";

confirmation.style.display = "block";
    });

});
// Animation des sections au défilement
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(function(section) {
    section.classList.add("section-hidden");
    observer.observe(section);
});