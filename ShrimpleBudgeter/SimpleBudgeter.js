function calc () {
    let income = document.getElementById("income").value;
    let food = document.getElementById("food").value;
    let water = document.getElementById("water").value;
    let rent = document.getElementById("rent").value;
    let electricty = document.getElementById("electricty").value;
    let plumbing = document.getElementById("plumbing").value;
    let gas = document.getElementById("gas").value;

    let total = income - food - water - rent - electricty - plumbing - gas;

    document.getElementById("total").innerHTML = 'total: ${total}';

    if (total >= 999999999999) {
        document.getElementById(tip1).style.visibilty = "visible";
    }

    if (999999999999 > total >= 100000000) {
        document.getElementById(tip2).style.visibilty = "visible";
    }

    if (100000000 > total >= 1000) {
        document.getElementById(tip3).style.visibilty = "visible";
    }

    if (1000 > total >= 0) {
        document.getElementById(tip4).style.visibilty = "visible";
    }

    if (0 > total) {
        document.getElementById(tip5).style.visibilty = "visible";
    }

    if (total <= 0) {
        document.getElementById(tip6).style.visibilty = "visible";
    }
}