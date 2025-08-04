
// Menu mobile toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// WhatsApp function
function abrirWhatsApp() {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de Medicina Tradicional Chinesa.");
    const whatsappUrl = `https://wa.me/351XXXXXXXXX?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
