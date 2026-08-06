// -----------------------------
// Mobile Navigation
// -----------------------------

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});


// -----------------------------
// Featured Destinations
// -----------------------------

const featuredDestinations = [

    {
        name: "Obudu Mountain Resort",
        state: "Cross River",
        image: "images/obudu.jpg",
        description: "Enjoy breathtaking mountain scenery, cool weather, hiking trails, and Africa's longest cable car."
    },

    {
        name: "Yankari National Park",
        state: "Bauchi",
        image: "images/yankari.jpg",
        description: "Nigeria's premier wildlife reserve, home to elephants, baboons, antelopes, and warm natural springs."
    },

    {
        name: "Olumo Rock",
        state: "Ogun",
        image: "images/olumo.jpg",
        description: "Explore ancient caves, historical shelters, and spectacular panoramic views from the summit."
    }

];


// -----------------------------
// Greeting
// -----------------------------

function getGreeting() {

    const hour = new Date().getHours();

    if (hour < 12) {

        return "Good Morning!";

    } else if (hour < 18) {

        return "Good Afternoon!";

    } else {

        return "Good Evening!";

    }

}


// -----------------------------
// Display Featured Destination
// -----------------------------

function displayFeaturedDestination() {

    const container = document.querySelector("#featuredDestination");

    if (!container) return;

    const randomIndex = Math.floor(Math.random() * featuredDestinations.length);

    const destination = featuredDestinations[randomIndex];

    container.innerHTML = `
        <article class="card">

            <img
                src="${destination.image}"
                alt="${destination.name}"
                loading="lazy">

            <h3>${destination.name}</h3>

            <p><strong>Location:</strong> ${destination.state}</p>

            <p>${destination.description}</p>

            <button id="saveFeatured">
                Save as Favorite
            </button>

        </article>
    `;

    const saveButton = document.querySelector("#saveFeatured");

    saveButton.addEventListener("click", () => {

        localStorage.setItem(
            "favoriteDestination",
            JSON.stringify(destination)
        );

        alert(`${destination.name} has been saved as your favorite destination!`);

        displayFavorite();

    });

}


// -----------------------------
// Display Favorite Destination
// -----------------------------

function displayFavorite() {

    const container = document.querySelector("#favoriteDestination");

    if (!container) return;

    const saved = localStorage.getItem("favoriteDestination");

    if (!saved) {

        container.innerHTML = `
            <p>No favorite destination has been saved yet.</p>
        `;

        return;

    }

    const destination = JSON.parse(saved);

    container.innerHTML = `

        <article class="card">

            <img
                src="${destination.image}"
                alt="${destination.name}"
                loading="lazy">

            <h3>${destination.name}</h3>

            <p>${destination.description}</p>

        </article>

    `;

}


// -----------------------------
// Greeting Message
// -----------------------------

function showGreeting() {

    const hero = document.querySelector(".hero-text");

    if (!hero) return;

    const greeting = document.createElement("p");

    greeting.innerHTML = `<strong>${getGreeting()}</strong> Welcome to Explore Nigeria!`;

    hero.prepend(greeting);

}


// -----------------------------
// Initialize
// -----------------------------

showGreeting();

displayFeaturedDestination();

displayFavorite();