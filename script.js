document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    const heroHeading = document.getElementById('hero-heading');

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            
            // Smooth scroll para a seção alvo
            target.scrollIntoView({
                behavior: "smooth"
            });

            // Esconde o h2 após o scroll
            setTimeout(function() {
                if (window.scrollY > 100) { // Ajuste esse valor como preferir
                    heroHeading.style.opacity = '0';
                    heroHeading.style.transition = 'opacity 0.5s ease-out';
                } else {
                    heroHeading.style.opacity = '1';
                    heroHeading.style.transition = 'opacity 0.5s ease-in';
                }
            }, 500); // Tempo para garantir que o scrollIntoView acabou
        });
    });

    // Esconde o h2 durante o scroll manual
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            heroHeading.style.opacity = '0';
            heroHeading.style.transition = 'opacity 0.5s ease-out';
        } else {
            heroHeading.style.opacity = '1';
            heroHeading.style.transition = 'opacity 0.5s ease-in';
        }
    });
});

