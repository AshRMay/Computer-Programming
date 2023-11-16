document.getElementById("greeting").addEventListener("click", function() {
    document.getElementById("greeting").innerHTML = "Goodbye!";
});

document.getElementById("greeting").addEventListener("dblclick", function() {
    document.getElementById("greeting").innerHTML = "What are you doing here...?";
});

document.getElementById("scammer").addEventListener("copy", function() {
    document.getElementById("scammer").innerHTML = "Bro.";
});

document.getElementById("scammer").addEventListener("cut", function() {
    document.getElementById("scammer").innerHTML = "You can't cut text, fool.";
});

document.getElementById("scammer").addEventListener("paste", function() {
    document.getElementById("scammer").innerHTML = "My guy what are you even trying to paste here...";
});

document.getElementById("scammer").addEventListener("blur", function() {
    document.getElementById("scammer").innerHTML = "Now you don't.";
});


document.getElementById("color").addEventListener("mouseover", function() {
    document.getElementById("color").style.backgroundColor = "red";
    document.getElementById("color").style.height = "500px";
    document.getElementById("color").style.width = "500px";
    document.getElementById("color").style.borderRadius = "100%";
});

document.getElementById("color").addEventListener("mouseout", function() {
    document.getElementById("color").style.backgroundColor = "blue";
    document.getElementById("color").style.height = "200px";
    document.getElementById("color").style.width = "200px";
    document.getElementById("color").style.borderRadius = "0%";
});