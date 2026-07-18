const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1) + " °C";
}

const windChill = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = calculateWindChill(temperature, windSpeed);
} else {
    windChill.textContent = "N/A";
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;