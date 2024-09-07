let c = 37;
let f = 98.60000000000001;

const farenheit = (c*(9/5))+32;
console.log("celcius orginal value",c);
console.log("farenheit value", farenheit);

const celsius = (farenheit-32) *(5/9);
console.log("farenheit orginal value", Math.round(f));
console.log("celsius value", Math.round(celsius));

