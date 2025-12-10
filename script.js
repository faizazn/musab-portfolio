// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Text typing effect
    const texts = [
        "Real Estate Virtual Assistant",
        "Transaction Coordinator",
        "B2B Sales & Customer Support Specialist",
        "Leasing & Property Management Assistant"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    const typingElement = document.querySelector('.typing-text');
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingDelay = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingDelay = 500;
        }
        
        setTimeout(type, typingDelay);
    }
    
    // Start the typing effect after a short delay
    setTimeout(type, 1000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        // Add shadow when scrolled
        if (scrollTop > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Create floating particles
    createParticles();
    
    function createParticles() {
        const particlesContainer = document.querySelector('.particles-container');
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random properties
            const size = Math.random() * 5 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            const opacity = Math.random() * 0.3 + 0.1;
            
            // Apply styles
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.background = `rgba(42, 107, 252, ${opacity})`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Add CSS for particles
    const style = document.createElement('style');
    style.textContent = `
        .particles-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        }
        
        .particle {
            position: absolute;
            border-radius: 50%;
            background: rgba(42, 107, 252, 0.1);
            animation: particleFloat 20s infinite linear;
        }
        
        @keyframes particleFloat {
            0% {
                transform: translateY(100vh) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.5;
            }
            90% {
                opacity: 0.5;
            }
            100% {
                transform: translateY(-100px) translateX(100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    // Initialize the page
document.addEventListener("DOMContentLoaded", function () {
    // ... (previous code remains the same) ...
    
    // Add animation to feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    function animateOnScroll() {
        featureCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
        
        testimonialCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    testimonialCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Add hover effect to tech stack items
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Animate stats counters
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + (stat.textContent.includes('%') ? '%' : '+');
            }, 20);
        });
    }
    
    // Trigger stats animation when section is in view
    const observerOptions = {
        threshold: 0.5
    };
    
    const workSection = document.querySelector('.work-with-me');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateStats, 500);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    if (workSection) {
        observer.observe(workSection);
    }
});
});