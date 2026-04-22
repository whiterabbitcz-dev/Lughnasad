/**
 * Lughnasad — Shared JS (all pages)
 * Mobile menu, smooth scroll, floating button, cookie banner.
 */

// =====================
// MOBILE MENU
// =====================
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const toggle = document.getElementById('menu-toggle');
    if (!menu || !toggle) return;

    const isHidden = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#mobile-menu a').forEach(function (link) {
        link.addEventListener('click', function () {
            document.getElementById('mobile-menu').classList.add('hidden');
            document.getElementById('menu-toggle').setAttribute('aria-expanded', 'false');
        });
    });
});

// =====================
// SMOOTH SCROLL
// =====================
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;

            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// =====================
// FLOATING TICKETS BUTTON — hide near footer
// =====================
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.querySelector('.floating-tickets-btn');
        var footer = document.querySelector('footer');
        if (!btn || !footer) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                btn.classList.toggle('hidden-by-footer', entry.isIntersecting);
            });
        }, { threshold: 0.05 });
        observer.observe(footer);
    });
})();

// =====================
// COOKIE BANNER
// =====================
function showCookieBanner() {
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(function () {
            var banner = document.getElementById('cookie-banner');
            if (banner) banner.classList.add('show');
        }, 1000);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.remove('show');
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', showCookieBanner);

// =====================
// CONTACT FORM (placeholder)
// =====================
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('#kontakt form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Děkujeme za zprávu! Budeme vás kontaktovat co nejdříve.');
            this.reset();
        });
    }
});
