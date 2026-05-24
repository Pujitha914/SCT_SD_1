function convertTemperature() {
    let temp = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (isNaN(temp)) {
        result.innerHTML = "Please enter a valid temperature.";
        return;
    }

    let output = "";

    if (unit === "celsius") {
        let fahrenheit = (temp * 9 / 5) + 32;
        let kelvin = temp + 273.15;

        output = `
            Fahrenheit: ${fahrenheit.toFixed(2)} °F <br>
            Kelvin: ${kelvin.toFixed(2)} K
        `;
    }

    else if (unit === "fahrenheit") {
        let celsius = (temp - 32) * 5 / 9;
        let kelvin = celsius + 273.15;

        output = `
            Celsius: ${celsius.toFixed(2)} °C <br>
            Kelvin: ${kelvin.toFixed(2)} K
        `;
    }

    else if (unit === "kelvin") {
        if (temp < 0) {
            result.innerHTML = "Kelvin cannot be negative.";
            return;
        }

        let celsius = temp - 273.15;
        let fahrenheit = (celsius * 9 / 5) + 32;

        output = `
            Celsius: ${celsius.toFixed(2)} °C <br>
            Fahrenheit: ${fahrenheit.toFixed(2)} °F
        `;
    }

    result.innerHTML = output;
}