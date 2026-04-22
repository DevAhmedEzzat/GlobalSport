// Mobile Navigation Toggle
 document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close mobile menu if open
        document.getElementById('nav-menu').classList.remove('active');
    });
});

// Animation for feature cards on scroll
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.hero-content').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.9s ease';
    observer.observe(card);
});

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.9s ease';
    observer.observe(card);
});

document.querySelectorAll('.category-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.9s ease';
    observer.observe(card);
});

document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.9s ease';
    observer.observe(card);
});

/** button (top)*/
const buttonTop= document.createElement('button');
buttonTop.innerHTML='top';
buttonTop.classList.add('button-top');
document.querySelector('body').appendChild(buttonTop);
document.addEventListener('scroll', function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        buttonTop.style.display = 'block';
    } else {
        buttonTop.style.display = 'none';
    }
});

buttonTop.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});













