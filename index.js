/* 1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound */

const inpMeasurementValue = document.getElementById("txtInp-measurement-value");
const btnConvert = document.getElementById('btn-convert');
const lengthResultEl = document.querySelector('#length-panel p');
const volumeResultEl = document.querySelector('#volume-panel p');
const massResultEl = document.querySelector('#mass-panel p');
const btnThemeSwitcher = document.getElementById('theme-switcher');

// retrieve from browser localStorage
const savedMeasurementValue = JSON.parse(localStorage.getItem("measurementValue"));
if (savedMeasurementValue !== null) {
    inpMeasurementValue.value = savedMeasurementValue;
    performAndRenderConversion();
}

const savedDarkThemeStatus = JSON.parse(localStorage.getItem("isDarkTheme"));
if (savedDarkThemeStatus !== null) {
    if (savedDarkThemeStatus) {
        toggleDarkTheme();
    }
}

btnConvert.addEventListener("click", performAndRenderConversion);
btnThemeSwitcher.addEventListener("click", toggleDarkTheme);

function performAndRenderConversion() {
    // input value
    const measurementValue = Number(inpMeasurementValue.value);

    // save to browser localStorage
    localStorage.setItem("measurementValue", JSON.stringify(inpMeasurementValue.value));

    // length conversion(s)
    const measurementInFeet = measurementValue * 3.281;
    const measurementInMeters = measurementValue / 3.281;

    // Volume conversion(s)
    const measurementInGallons = measurementValue * 0.264;
    const measurementInLitres = measurementValue / 0.264;

    // Mass conversion(s)
    const measurementInPounds = measurementValue * 2.204;
    const measurementInKilograms = measurementValue / 2.204;

    // conversion result string construction
    const lengthResultStr = `${measurementValue} meters = ${measurementInFeet.toFixed(3)} feet | ${measurementValue} feet = ${measurementInMeters.toFixed(3)} meters`;
    const volumeResultStr = `${measurementValue} litres = ${measurementInGallons.toFixed(3)} gallons | ${measurementValue} gallons = ${measurementInLitres.toFixed(3)} litres`;
    const massResultStr = `${measurementValue} kilos = ${measurementInPounds.toFixed(3)} pounds | ${measurementValue} pounds = ${measurementInKilograms.toFixed(3)} kilos`;

    // displaying conversion result string
    lengthResultEl.textContent = lengthResultStr;
    volumeResultEl.textContent = volumeResultStr;
    massResultEl.textContent = massResultStr;
}

function toggleDarkTheme() {
    const isDarkTheme = document.body.classList.toggle('dark-theme');
    console.log(isDarkTheme);
    // event.currentTarget.textContent = (isDarkTheme) ? "Light ☀️" : "Dark 🌑";
    btnThemeSwitcher.textContent = (isDarkTheme) ? "☀️ Light" : "🌙 Dark";

    // save to browser localStorage
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
}