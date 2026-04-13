//Задание 2
let button = document.getElementById("jsButton");

button.addEventListener("click", function() {
  console.log("Событие обработано через JS");
});
let div = document.getElementById("myDiv");
//Задание 3
div.style.width = "200px";
div.style.height = "200px";
div.addEventListener("click", function() {
  div.style.backgroundColor = "blue";
});
div.addEventListener("mouseover", function() {
  console.log("Элемент нажат");
});
//Задание 4
const input = document.getElementById("textInput");

input.addEventListener("keydown", function(event) {
    console.log(event.target.value);
});
//Задание 5
const link =document.getElementById('myLink');
link.addEventListener('click', function(event){
    event.preventDefault()
    console.log('Переход по ссылке отменен')
})
//Задание 6
const linkk = document.getElementById('list');
linkk.addEventListener('click', function(event){
    console.log(event.target.textContent)
})
//Задание 7
const inputt = document.getElementById('keyboardInput');
inputt.addEventListener('keydown', function(event){
  console.log(event.code)
})