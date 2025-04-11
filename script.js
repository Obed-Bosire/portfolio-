// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Balloon animation
const balloons = document.querySelectorAll('.balloon');
balloons.forEach(balloon => {
    balloon.style.animationDuration = `${Math.random() * 6 + 4}s`;
});