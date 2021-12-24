const kelvin=prompt("Enter your temperature value in Kelvin?");
let celsius=kelvin-273;
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
let newton = Math.round(celsius * (33 / 100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, which is equivalent to ${newton} degrees Newton.`);