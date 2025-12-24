/**
 * Personal Portfolio
 * Zülküf Demirhan - Product Designer & UX Engineer
 */

document.addEventListener('DOMContentLoaded', () => {
    // Console signature
    console.log(
        '%c Designed & Developed by Zülküf Demirhan ',
        'background: #ff7f37; color: #fff; padding: 5px; border-radius: 5px;'
    );

    // Intersection Observer for Scroll Reveal
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only reveal once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Parallax effect for social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            link.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translate(0, 0)';
        });
    });
});