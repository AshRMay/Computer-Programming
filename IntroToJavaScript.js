document.getElementById("title").innerHTML = `Hello ${myName}`;

const myName = "Ash"

 let favColor = "Red"

 favColor = "Blue"

 let age = 30

mainPerson = {
     name: "Ash",
     age: 30,
     favColor: "Blue"
 }

 favFoood = ["Steak", "Ice Cream", "Chicken Nuggets"]

 const isAlive = true

 function describePerson(person) {
     alert("MISSSING PERSON ALERT:" + person.name);
     alert(`MISSING PERSON ALERT: ${person.name} missing since 1988, wearing a sombrero.`)
 }

 describePerson(mainPerson)

 if (age > 30 && age < 50){/     alert("You're on your way to middle age.")
 } else if ( age < 30) {
     alert("You're a baby.")
 } else {
     alert("How are you alive...?")
}

const para = document.createElement("p");
para.innnerHTML = "I'm the paragrah you just created.";
document.getElementsByTagName("div1").appendChild(para);
