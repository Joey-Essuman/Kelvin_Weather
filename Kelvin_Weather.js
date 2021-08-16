//This is the constant temp. variable in Kelvin.
const Kelvin = 100;
//Celsius is 273 less than Kelvin
let Celsius = Kelvin - 273;
//Farenheit is Celsius multiplied by the equation below
let Farenheit = Celsius * (9 / 5) + 32;
//Math.floor rounds the value of Farenheit down to a whole number
Farenheit = Math.floor(Farenheit);

console.log(`The temperature is ${Farenheit} degrees Farenheit`);

let Newton = Celsius * (33 / 100);
Newton = Math.floor(Newton);

console.log(`${Celsius} Celsius is equivalent to ${Newton} Newton`);
