// Smooth Scroll for Navbar Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: section.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let skillItems = document.querySelectorAll(".skill-item");

    skillItems.forEach(skill => {
        skill.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});

document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents actual form submission
    
    // Get form values
    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let message = document.querySelector("textarea").value;
    
    if (name && email && message) {
        alert("Message Sent Successfully!");
        document.querySelector(".contact-form").reset(); // Clears the form after submission
    } else {
        alert("Please fill in all fields!");
    }
});
