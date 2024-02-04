// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }

  var celsiusTemperature = 25;
var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log("Temperature in Fahrenheit:", fahrenheitTemperature);

