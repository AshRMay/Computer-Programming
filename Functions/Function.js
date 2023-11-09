function tellFortune() {
    e.preventDefault();

    numOfChildren = document.getElementById('children').value;
    partnerName = document.getElementById('partner').value;
    location = document.getElementById('location').value;
    jobTitle = document.getElementById('job').value;

    document.getElementById('You will be an ${jobTitle} in  ${location}, and married to ${partnername} with ${numOfChildren} kids.');
}
function calculateDogAge(puppyAge) {
    dogAge = puppyAge * 7;
    console.log('Your doggie is ${dogAge} years old in dog years!')
}
function calculateSupply(age, amountPerDay) {
    maxAge = 80;
    amountPetYear = amountPerDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear;
    console.log('You will need ${totalAmount} to last you until the ripe old age of ${maxAge}')
}
function calculateCircumfrence(radius) {
    circumference = 2 * Math.PI * radius;
    console.log('The circumfrence is ${circumfrence}');
}
const calcArea = (radius) => console.log('The area is ${Math.PI * radius * radius}')
function celsiusToFahrenheit(celsius){
    console.log('${celsius}*C is ${fahrenheit}*F');
}

const celsiusToFahrenheit = (clesius) => console.log('${celsius}*C is ${ceelsius * 9 / 5 + 32}*F');

function fahrenheitToCelsius(fahrenheit) {
    clesius = (fahrenheit - 32) * 5 / 9;
    console.log('$fahrenheit}*F is ${celsius}*C');
}
const fahrenheitToCelsius = (fahrenheit) => console.log('${fahrenheit}*F')