//Задание 1
let message = document.getElementById("message");
message.textContent = "Добро пожаловать в JavaScript!";
//Задание 2
let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "green";
}
//Задание 3
const firstMenuItem = document.querySelector('#text');
firstMenuItem.textContent = 'hello1';

const highlightedParagraphs = document.querySelectorAll('.box');
highlightedParagraphs.forEach(function (box) {
    box.style.backgroundColor = 'red'
})
//Задание 4
const highlighted = document.querySelectorAll("#highlight")

highlighted.forEach((paragraph) => {
   paragraph.style.color = 'blue';
});