// ----------------------------
// Mobile Navigation
// ----------------------------

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });
}

// ----------------------------
// Form Elements
// ----------------------------

const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullname");
const email = document.querySelector("#email");
const destination = document.querySelector("#destination");
const message = document.querySelector("#message");
const response = document.querySelector("#formResponse");

// ----------------------------
// Email Validation
// ----------------------------

function validateEmail(emailAddress) {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(emailAddress);

}

// ----------------------------
// Display Message
// ----------------------------

function showMessage(text, success = true) {

    response.textContent = text;

    response.style.color = success ? "#2E7D32" : "#d32f2f";

}

// ----------------------------
// Form Validation
// ----------------------------

function validateForm(event) {

    event.preventDefault();

    if (fullName.value.trim() === "") {

        showMessage("Please enter your full name.", false);

        fullName.focus();

        return;

    }

    if (!validateEmail(email.value.trim())) {

        showMessage("Please enter a valid email address.", false);

        email.focus();

        return;

    }

    if (destination.value === "") {

        showMessage("Please select a destination.", false);

        destination.focus();

        return;

    }

    if (message.value.trim().length < 20) {

        showMessage(
            "Your message should contain at least 20 characters.",
            false
        );

        message.focus();

        return;

    }

    saveVisitor();

}

// ----------------------------
// Save Visitor
// ----------------------------

function saveVisitor() {

    const visitor = {

        name: fullName.value.trim(),

        email: email.value.trim(),

        destination: destination.value,

        message: message.value.trim(),

        submitted: new Date().toLocaleString()

    };

    localStorage.setItem(
        "visitor",
        JSON.stringify(visitor)
    );

    showMessage(

        `Thank you, ${visitor.name}! Your message has been received. We appreciate your interest in ${visitor.destination}.`

    );

    form.reset();

}

// ----------------------------
// Load Returning Visitor
// ----------------------------

function loadVisitor() {

    const savedVisitor = localStorage.getItem("visitor");

    if (!savedVisitor) return;

    const visitor = JSON.parse(savedVisitor);

    fullName.value = visitor.name;

    email.value = visitor.email;

}

// ----------------------------
// Event Listener
// ----------------------------

form.addEventListener("submit", validateForm);

// ----------------------------
// Initialize
// ----------------------------

loadVisitor();