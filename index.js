/**
 * Personal Portfolio
 * Zülküf Demirhan - Product Designer & UX Engineer
 */

document.addEventListener('DOMContentLoaded', () => {
    // Console signature - A subtle nod to engineers
    console.log(
        '%c [system] Zülküf Demirhan: Initialized. Pragmatic design mode active. ',
        'background: #111; color: #ff8b4d; padding: 5px; border-left: 3px solid #ff8b4d;'
    );

    // 1. Clever Detail: Cycling System Status
    const statusText = document.getElementById('status-cycling');
    const statuses = [
        'system_init: optimizing_user_value',
        'vibe_coding: strategic_delivery',
        'status: bridging_design_engineering',
        'mode: pragmatic_minimalism',
        'ownership: end_to_end_delivery',
        'context: ist_2026'
    ];
    let statusIndex = 0;

    function cycleStatus() {
        statusText.style.opacity = 0;
        setTimeout(() => {
            statusIndex = (statusIndex + 1) % statuses.length;
            statusText.textContent = statuses[statusIndex];
            statusText.style.opacity = 0.6; // Keep it subtle
        }, 500);
    }

    // Initial opacity set as per cycle timing
    statusText.style.transition = 'opacity 0.5s ease';
    setInterval(cycleStatus, 4000);

    // 2. Intersection Observer for Scroll Reveal
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Restrained Interaction: Subtle Social Cursor Follow
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            // Very damped movement (0.05 instead of 0.2) for "restrained" feel
            const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.1;

            link.style.transition = 'transform 0.1s ease-out';
            link.style.transform = `translate(${x}px, ${y}px)`;
        });

        link.addEventListener('mouseleave', () => {
            link.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
            link.style.transform = 'translate(0, 0)';
        });
    });

    // 4. Moment of Delight: Logic-based fading
    // As user scrolls, the hero content fades out slightly more than the default 
    // to give focus to the "Strategic Product Design" section.
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero__content');
        if (heroContent) {
            heroContent.style.opacity = Math.max(0, 1 - scrolled / 600);
            heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    });
});