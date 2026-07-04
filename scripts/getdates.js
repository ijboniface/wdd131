// Current Year

const today = new Date();

document.getElementById("currentyear").textContent = today.getFullYear();


// Last Modified

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;