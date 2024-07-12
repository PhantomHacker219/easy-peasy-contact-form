let inputElement = document.querySelector('#n');

let inputElement2 = document.querySelector('#a');

let inputElement3 = document.querySelector('#m');

let text = document.querySelector("#na");

let age = document.querySelector("#ag");

let mari = document.querySelector("#ma");

let displayName = document.querySelector("#displayName");
let displayAge = document.querySelector("#displayAge");
let displayMarried = document.querySelector("#displayMarried");

inputElement.addEventListener('keyup', function(event) {
    console.log('Введено:', inputElement.value);
    text.style = "display: block;";
    displayName.innerHTML = inputElement.value;
});

inputElement2.addEventListener('keyup', function(event) {
    console.log('Введено:', inputElement2.value);
    age.style = "display: block;";
    displayAge.innerHTML = inputElement2.value;
});

inputElement3.addEventListener('keyup', function(event) {
    console.log('Введено:', inputElement3.value);
    mari.style = "display: block;";
    displayMarried.innerHTML = inputElement3.value;
});

