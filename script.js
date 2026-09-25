// Portfolio JavaScript

// Welcome message in console
console.log("Welcome to Tanvi's Portfolio!");

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// Contact button message
const contactButton = document.querySelector('.btn');

if (contactButton) {

    contactButton.addEventListener('click', function() {

        console.log("Contact section opened.");

    });

}
// Typing Animation

const typingText = document.getElementById("typing-text");

const words = [
    "Web Developer",
    "Java Programmer",
    "AI/ML Enthusiast",
    "Computer Science Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();