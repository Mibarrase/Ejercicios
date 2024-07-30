let temperaturaCelsius = 25;
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
console.log(`Temperatura en Fahrenheit: ${temperaturaFahrenheit}°F`);

temperaturaFahrenheit = 77;
temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;
console.log(`Temperatura en Celsius: ${temperaturaCelsius.toFixed(2)}°C`);