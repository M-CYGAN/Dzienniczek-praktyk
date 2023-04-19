const btn = document.querySelector("[type=submit]");

btn.addEventListener("click", function (evt) {
evt.preventDefault();
const name = document.querySelector("#name").value;
console.log(name.value) ;
const display = document.querySelector("#div")
});