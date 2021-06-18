let html = document.getElementById("app");
let numbers = [1, 2, 3, 4, 5, 3, 7, 19, 55]
let box = "";
let numbervalue = 3000;
let anotherValue = 0;

let x;

function loop1() {
    for (x in numbers) {
        html.innerHTML += " " + numbers[x];
    }
}

