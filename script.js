/* ========================================
   RIDEOUT DELIVERY - Interactive Features
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Mobile Menu --- */
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('open');
        });

        // Close menu when a nav link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('open');
            });
        });
    }

    /* --- Smooth Scroll --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    /* --- FAQ Accordion --- */
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const answer = item.querySelector('.faq-answer');
            const isOpen = item.classList.contains('open');

            // Close all other items
            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                if (openItem !== item) {
                    openItem.classList.remove('open');
                    openItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            // Toggle current item
            if (isOpen) {
                item.classList.remove('open');
                answer.style.maxHeight = null;
            } else {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    /* --- Form Validation & Submission --- */
    const form = document.getElementById('quote-form');
    const formSuccess = document.getElementById('form-success');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Validate name
            const name = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (!name.value.trim()) {
                name.classList.add('error');
                nameError.classList.add('visible');
                isValid = false;
            } else {
                name.classList.remove('error');
                nameError.classList.remove('visible');
            }

            // Validate phone
            const phone = document.getElementById('phone');
            const phoneError = document.getElementById('phone-error');
            const phoneValue = phone.value.replace(/[\s\-\(\)]/g, '');
            if (!phoneValue || phoneValue.length < 7) {
                phone.classList.add('error');
                phoneError.classList.add('visible');
                isValid = false;
            } else {
                phone.classList.remove('error');
                phoneError.classList.remove('visible');
            }

            if (isValid) {
                const submitBtn = form.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';

                fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                }).then(response => {
                    if (response.ok) {
                        form.style.display = 'none';
                        formSuccess.classList.add('visible');
                        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Request Free Quote';
                        alert('Something went wrong. Please call us at (613) 325-0274.');
                    }
                }).catch(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Request Free Quote';
                    alert('Something went wrong. Please call us at (613) 325-0274.');
                });
            }
        });

        // Clear errors on input
        form.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('input', () => {
                field.classList.remove('error');
                const errorMsg = field.parentElement.querySelector('.error-message');
                if (errorMsg) errorMsg.classList.remove('visible');
            });
        });
    }

    /* --- Scroll Animations (Intersection Observer) --- */
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation for siblings
                    const siblings = entry.target.parentElement.querySelectorAll('.fade-in');
                    const siblingIndex = Array.from(siblings).indexOf(entry.target);
                    const delay = siblingIndex * 100;

                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(el => observer.observe(el));
    } else {
        // Fallback: show all elements immediately
        fadeElements.forEach(el => el.classList.add('visible'));
    }

    /* --- Set minimum date for date picker --- */
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

});
