// ===========================
// Form Handling
// ===========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !phone || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[0-9]{10,}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            alert('Please enter a valid phone number');
            return;
        }
        
        // Create WhatsApp message
        const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0A%0AMessage: ${message}`;
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/917891919191?text=${whatsappMessage}`, '_blank');
        
        // Reset form
        contactForm.reset();
        
        // Optional: Show success feedback
        showFormFeedback();
    });
}

function showFormFeedback() {
    const button = document.querySelector('.btn-submit');
    const originalText = button.textContent;
    
    button.textContent = '✓ Message sent!';
    button.style.backgroundColor = '#8BC34A';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
    }, 3000);
}

// ===========================
// Smooth Scrolling for Navigation Links
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#" or doesn't point to a valid element
        if (href === '#' || !document.querySelector(href)) {
            return;
        }
        
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Sticky Button Visibility on Scroll
// ===========================

const stickyButton = document.querySelector('.sticky-contact-btn');
const contactSection = document.getElementById('contact');

if (stickyButton && contactSection) {
    window.addEventListener('scroll', () => {
        const contactSectionTop = contactSection.offsetTop;
        const contactSectionHeight = contactSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Hide sticky button when contact section is visible
        if (scrollPosition > contactSectionTop) {
            stickyButton.style.opacity = '0.3';
            stickyButton.style.pointerEvents = 'none';
        } else {
            stickyButton.style.opacity = '1';
            stickyButton.style.pointerEvents = 'auto';
        }
    });
}

// ===========================
// Intersection Observer for Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards and highlight items
document.querySelectorAll('.feature-card, .highlight-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===========================
// Navigation Active State
// ===========================

window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav a');
    let currentSection = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===========================
// Mobile Menu Toggle (if needed in future)
// ===========================

// Add functionality for mobile menu if navigation is expanded in future

// ===========================
// Utility: Get Current Year for Footer
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector('.footer-bottom');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
});

// ===========================
// WhatsApp Chat Link Handler
// ===========================

const whatsappBtn = document.querySelector('.btn-whatsapp');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
        // The link is already set up in HTML, this just ensures it works
        e.stopPropagation();
    });
}

// ===========================
// Print Friendly Styling on Print
// ===========================

window.addEventListener('beforeprint', () => {
    document.body.style.background = 'white';
});

// ===========================
// Accessibility: Add Focus Styles
// ===========================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});
