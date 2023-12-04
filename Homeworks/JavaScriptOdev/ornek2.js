//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32

let dereceCelsius = prompt("Santigrat derece girin:");
let dereceFahrenheit = (dereceCelsius * 9 / 5) + 32;

console.log(`${dereceCelsius} Celsius derece, ${dereceFahrenheit.toFixed(2)} Fahrenheit'a eşittir.`);