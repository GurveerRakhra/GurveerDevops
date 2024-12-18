// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the form
    const form = document.querySelector("form");

    // Add event listener for form submission
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Validate form fields
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const address = document.getElementById("address").value.trim();
        const postalCode = document.getElementById("postalCode").value.trim();
        const phoneNumber = document.getElementById("number").value.trim();
        const email = document.getElementById("email").value.trim();

        // Check if all fields are filled
        if (!firstName || !lastName || !address || !postalCode || !phoneNumber || !email) {
            alert("Please fill in all the fields.");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate phone number (basic validation for 10-digit numbers)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // If all validations pass, display a success message
        alert("Form submitted successfully!");
        
        // Optionally, reset the form
        form.reset();
    });
});
