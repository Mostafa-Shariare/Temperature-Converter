let temperature = document.getElementById("temperature");
let CtoF = document.getElementById("CtoF");
let CtoK = document.getElementById("CtoK");
let FtoC = document.getElementById("FtoC");
let FtoK = document.getElementById("FtoK");
let KtoC = document.getElementById("KtoC");
let KtoF = document.getElementById("KtoF");
let result = document.getElementById("result");
let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    let temp = Number(temperature.value); 

    if (CtoF.checked) {
        result.textContent = "Fahrenheit: " + ((temp * 9 / 5) + 32).toFixed(2);
    } else if (CtoK.checked) {
        result.textContent = "Kelvin: " + (temp + 273.15).toFixed(2);
    } else if (FtoC.checked) {
        result.textContent = "Celsius: " + ((temp - 32) * 5 / 9).toFixed(2);
    } else if (FtoK.checked) {
        result.textContent = "Kelvin: " + ((temp + 459.67) * 5 / 9).toFixed(2);
    } else if (KtoC.checked) {
        result.textContent = "Celsius: " + (temp - 273.15).toFixed(2);
    } else if (KtoF.checked) {
        result.textContent = "Fahrenheit: " + ((temp * 9 / 5) - 459.67).toFixed(2);
    } else {
        result.textContent = "Please select a conversion option.";
    }
});
