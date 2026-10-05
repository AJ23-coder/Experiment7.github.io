// Get the contact form
const form = document.getElementById("contactForm");

// Add submit event
form.addEventListener("submit", function(event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const response = document.getElementById("response");

    // Check if fields are empty
    if (name === "" || email === "" || message === "") {
        response.innerHTML = "Please fill in all the fields.";
        response.style.color = "red";
        return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        response.innerHTML = "Please enter a valid email address.";
        response.style.color = "red";
        return;
    }

    // Success message
    response.innerHTML =
        "Thank you, " + name + "! Your message has been sent.";
    response.style.color = "green";

    // Clear form
    form.reset();
});