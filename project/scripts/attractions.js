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
// Attraction Data
// ----------------------------

const attractions = [
    {
        id: 1,
        name: "Obudu Mountain Resort",
        state: "Cross River",
        category: "Adventure",
        image: "images/obudu.jpg",
        description: "Enjoy cool mountain weather, breathtaking scenery, hiking trails, and Africa's longest cable car."
    },
    {
        id: 2,
        name: "Olumo Rock",
        state: "Ogun",
        category: "History",
        image: "images/olumo.jpg",
        description: "Discover caves, ancient shelters, and panoramic views from one of Nigeria's most famous landmarks."
    },
    {
        id: 3,
        name: "Yankari National Park",
        state: "Bauchi",
        category: "Wildlife",
        image: "images/yankari.jpg",
        description: "Meet elephants, baboons, antelopes, and enjoy the warm Wikki Springs."
    },
    {
        id: 4,
        name: "Zuma Rock",
        state: "Niger",
        category: "Nature",
        image: "images/zuma.jpg",
        description: "Nigeria's iconic rock formation standing proudly beside the Abuja-Kaduna highway."
    },
    {
        id: 5,
        name: "Lekki Conservation Centre",
        state: "Lagos",
        category: "Nature",
        image: "images/lekki.jpg",
        description: "Walk across Africa's longest canopy walkway surrounded by beautiful wetlands."
    },
    {
        id: 6,
        name: "Erin Ijesha Waterfalls",
        state: "Osun",
        category: "Adventure",
        image: "images/erin.jpg",
        description: "A spectacular seven-level waterfall hidden within lush tropical forests."
    }
];

// ----------------------------
// DOM Elements
// ----------------------------

const container = document.querySelector("#attractionsContainer");
const searchBox = document.querySelector("#searchBox");
const categoryFilter = document.querySelector("#categoryFilter");

// ----------------------------
// Display Attractions
// ----------------------------

function displayAttractions(list) {

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <p>No attractions matched your search.</p>
        `;

        return;
    }

    list.forEach(attraction => {

        container.innerHTML += `

        <article class="card">

            <img
                src="${attraction.image}"
                alt="${attraction.name}"
                loading="lazy">

            <h3>${attraction.name}</h3>

            <p><strong>Location:</strong> ${attraction.state}</p>

            <p><strong>Category:</strong> ${attraction.category}</p>

            <p>${attraction.description}</p>

            <button
                class="favoriteButton"
                data-id="${attraction.id}">
                Save Favorite
            </button>

        </article>

        `;

    });

    activateFavoriteButtons();

}

// ----------------------------
// Save Favorite
// ----------------------------

function activateFavoriteButtons() {

    const buttons = document.querySelectorAll(".favoriteButton");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const selected = attractions.find(item => item.id === id);

            localStorage.setItem(
                "favoriteDestination",
                JSON.stringify(selected)
            );

            alert(`${selected.name} has been saved as your favorite destination.`);

        });

    });

}

// ----------------------------
// Search + Filter
// ----------------------------

function filterAttractions() {

    const searchText = searchBox.value.toLowerCase();

    const category = categoryFilter.value;

    const filtered = attractions.filter(attraction => {

        const matchesSearch =
            attraction.name.toLowerCase().includes(searchText) ||
            attraction.state.toLowerCase().includes(searchText);

        const matchesCategory =
            category === "All" ||
            attraction.category === category;

        return matchesSearch && matchesCategory;

    });

    displayAttractions(filtered);

}

// ----------------------------
// Event Listeners
// ----------------------------

searchBox.addEventListener("input", filterAttractions);

categoryFilter.addEventListener("change", filterAttractions);

// ----------------------------
// Initialize
// ----------------------------

displayAttractions(attractions);