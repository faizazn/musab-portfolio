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
    
    // Initialize Swiper 3D Coverflow
function initSwiper() {
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 20,
            stretch: -30,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        speed: 600,
        spaceBetween: 30,
        breakpoints: {
            320: {
                coverflowEffect: {
                    rotate: 10,
                    stretch: -20,
                    depth: 100,
                },
                spaceBetween: 15,
            },
            768: {
                coverflowEffect: {
                    rotate: 15,
                    stretch: -25,
                    depth: 150,
                },
                spaceBetween: 20,
            },
            992: {
                coverflowEffect: {
                    rotate: 20,
                    stretch: -30,
                    depth: 200,
                },
                spaceBetween: 30,
            }
        }
    });
    
    // Add hover effect to slides
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', function() {
            if (!this.classList.contains('swiper-slide-active')) {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 20px 40px rgba(42, 107, 252, 0.2)';
                this.style.zIndex = '5';
            }
        });
        
        slide.addEventListener('mouseleave', function() {
            if (!this.classList.contains('swiper-slide-active')) {
                this.style.transform = '';
                this.style.boxShadow = '';
                this.style.zIndex = '';
            }
        });
    });
    
    // Pause autoplay on hover
    const swiperContainer = document.querySelector('.swiper-container');
    swiperContainer.addEventListener('mouseenter', function() {
        swiper.autoplay.stop();
    });
    
    swiperContainer.addEventListener('mouseleave', function() {
        swiper.autoplay.start();
    });
    
    return swiper;
}

// Initialize Swiper when the page loads
if (typeof Swiper !== 'undefined') {
    setTimeout(initSwiper, 100);
}
    
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
        
        // Animate service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
        
        // Animate pricing cards
        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach(card => {
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
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
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
    
    // Add price highlighting effect
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
        price.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        price.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Package selection simulation
    const pricingBtns = document.querySelectorAll('.pricing-btn, .additional-btn');
    pricingBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#contact') {
                e.preventDefault();
                const packageName = this.textContent.trim();
                
                // Create a notification
                const notification = document.createElement('div');
                notification.className = 'package-notification';
                notification.innerHTML = `
                    <div class="notification-content">
                        <i class="fas fa-check-circle"></i>
                        <span>Interested in "${packageName}" package? Redirecting to contact form...</span>
                    </div>
                `;
                
                // Add styles for notification
                const style = document.createElement('style');
                style.textContent = `
                    .package-notification {
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        background: var(--gradient);
                        color: white;
                        padding: 15px 25px;
                        border-radius: 10px;
                        box-shadow: var(--shadow-hover);
                        z-index: 10000;
                        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
                        animation-fill-mode: forwards;
                        max-width: 400px;
                    }
                    
                    .notification-content {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }
                    
                    .notification-content i {
                        font-size: 1.2rem;
                    }
                    
                    @keyframes slideIn {
                        from {
                            transform: translateX(100%);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                    
                    @keyframes fadeOut {
                        from {
                            opacity: 1;
                        }
                        to {
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
                
                document.body.appendChild(notification);
                
                // Remove notification after 3 seconds
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 3000);
            }
        });
    });
    
    // Highlight most popular package on hover
    const featuredCard = document.querySelector('.pricing-card.featured');
    if (featuredCard) {
        featuredCard.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-10px)';
            this.style.boxShadow = '0 20px 50px rgba(42, 107, 252, 0.3)';
        });
        
        featuredCard.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1.05) translateY(0)';
            this.style.boxShadow = 'var(--shadow-hover)';
        });
    }
});

// Add styles for Swiper if not already loaded
if (!document.querySelector('#swiper-styles')) {
    const swiperStyle = document.createElement('style');
    swiperStyle.id = 'swiper-styles';
    swiperStyle.textContent = `
        .swiper-container {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `;
    document.head.appendChild(swiperStyle);
}
