let previousScrollPosition = window.scrollY;

window.addEventListener('scroll', () => {
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    const scrollPosition = window.scrollY;
    const triggerPosition = window.innerHeight / 2; // Trigger when section is halfway up the screen

    const scrollingDown = scrollPosition > previousScrollPosition;
    previousScrollPosition = scrollPosition;


    if (aboutSection.offsetTop < scrollPosition + triggerPosition) {
        aboutSection.querySelector('.content').classList.add('slide-in');
    } else if (!scrollingDown) {
        aboutSection.querySelector('.content').classList.remove('slide-in');
    }

    if (projectsSection.offsetTop < scrollPosition + triggerPosition) {
        projectsSection.querySelector('.content').classList.add('slide-in');
    } else if (!scrollingDown) {
        projectsSection.querySelector('.content').classList.remove('slide-in');
    }

    if (contactSection.offsetTop < scrollPosition + triggerPosition) {
        contactSection.querySelector('.content').classList.add('slide-in');
    } else if (!scrollingDown) {
        contactSection.querySelector('.content').classList.remove('slide-in');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;
            let errorMessage = '';

            // Name validation
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim() === '') {
                errorMessage += 'Name is required\n';
                isValid = false;
            }

            // Email validation
            const emailInput = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                errorMessage += 'Invalid email format\n';
                isValid = false;
            }

            // Message validation
            const messageInput = document.getElementById('message');
            if (messageInput.value.trim() === '') {
                errorMessage += 'Message is required\n';
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if invalid
                alert(errorMessage); // Show pop-up alert
            }
            else {
                // Optionally, you can show a success message or perform other actions here
                alert('message sent successfully!');
            }
        });
    }
});




const carousel = document.getElementById('carousel');
let isDragging = false;
let startX;
let startPosition;
let previousPosition = 3; // Initialize with the default selected position

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startPosition = previousPosition;
    carousel.classList.add('dragging');
    e.preventDefault();
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const sensitivity = 0.3;  // Adjust for desired sensitivity
    let newPosition = startPosition - Math.round(deltaX * sensitivity / 100);

     // Keep position within bounds (1 to 5)
    newPosition = Math.max(1, Math.min(newPosition, 5));


    if (newPosition !== previousPosition) {
        carousel.style.setProperty('--position', newPosition);
        previousPosition = newPosition;

        // Update the checked radio button
        const radioButtons = document.querySelectorAll('input[name="position"]');
        radioButtons.forEach((radio, index) => {
            radio.checked = (index + 1 === newPosition);
        });
    }

    e.preventDefault();
});

const resetDrag = () => {
    isDragging = false;
    carousel.classList.remove('dragging');
};

carousel.addEventListener('mouseup', resetDrag);
carousel.addEventListener('mouseleave', resetDrag);
