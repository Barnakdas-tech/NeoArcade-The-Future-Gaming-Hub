document.addEventListener('DOMContentLoaded', () => {
    console.log("Contact.js loaded");

    // 1. THEME TOGGLE (Consistent across pages)
    const themeButton = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeButton) {
        themeButton.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            console.log("Theme toggled on Contact page");
        });
    }

    // 2. CONTACT FORM VALIDATION & SUBMISSION
    const contactForm = document.getElementById('contact-form');
    const sendButton = document.getElementById('sendbtn');

    if (contactForm) {
        sendButton.addEventListener('click', (e) => {
            e.preventDefault(); 

            const name = document.getElementById('fname').value.trim();
            const email = document.getElementById('femail').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === "" || email === "" || message === "") {
                alert("⚠️ Error: Please fill in all fields before sending transmission.");
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                alert("⚠️ Error: Please enter a valid email address.");
                return;
            }

            // 1. Hide the form content or disable inputs
            const inputs = contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => input.disabled = true);
            sendButton.disabled = true;
            sendButton.innerText = "Sending...";

            setTimeout(() => {
                sendButton.innerText = "Transmission Sent!";
                sendButton.style.backgroundColor = "#00eaff"; 
                sendButton.style.color = "#000";
                
                alert(`✅ Transmission Received!\n\nThanks, ${name}. We have received your message: "${message.substring(0, 20)}..."\n\nWe will contact you at ${email} shortly.`);
                
                
            }, 1500);
        });
    }
});