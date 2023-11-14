function tellFortune() {
    e.preventDefault();

    numOfChildren = document.getElementById('children').value;
    partnerName = document.getElementById('partner').value;
    jobTitle = document.getElementById('job').value;

    document.getElementById('You will be an ${jobTitle} in  ${location}, and married to ${partnername} with ${numOfChildren} kids.');
}
function calculateDogAge(puppyAge) {
    puppyAge = document.getElementById("dog-age").value;
    dogAge = puppyAge * 7;
    document.getElementById(
    "age"
    ).innerHTML = ('Your doggie is ${dogAge} years old in dog years!')
}
function calculateSupply(age, amountPerDay) {
    age = document.getElementById("age").value
    amountPerDay = document.getElementById("amount-per-day").value
    maxAge = 80;
    amountPetYear = amountPerDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear;
    console.log('You will need ${totalAmount} to last you until the ripe old age of ${maxAge}')
}
function calculateCircumference(radius) {
    radius = document.getElementById("raidus").value;
    circumference = 2 * Math.PI * radius;
    document.getElementById(
        "circumference"
    ).innerHTML = 'The circumference is ${circumference}';
}
const calcArea = (radius) => console.log('The area is ${Math.PI * radius * radius}')
function celsiusToFahrenheit(celsius){
    console.log('${celsius}*C is ${fahrenheit}*F');
}

function clesiusToFahrenheit() {
    celsius = document.getElementById("celsius").value;
    fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById("fahrenheit").innerHTML = '${celsius}C is ${fahrenheit}F';
}