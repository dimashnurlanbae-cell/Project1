//Задание 1 
let number = prompt("Введите любое число:")
if (number >= 10) {
    console.log("Число больше 10");
} else {
    console.log("Число меньше или равно 10");
};
//Задание 2
let userConfirmed = confirm("Вы уверены, что хотите удалить этот файл?");

if (userConfirmed) {
   console.log("Файл удален");
} else {
   console.log("Удаление отменено");
};
//Задание 3
let UserAge = prompt("Введите ваш возраст:")
if (UserAge <= 18) {
    console.log("Вы еще подросток");
} else if (UserAge >= 30) {
   console.log("Вы взрослый");
} else {
    console.log("Вы молодой взрослый");
};
//Задание 4
let number1 = prompt("Введите любое число:");
if (number1 % 2 === 0) {
  console.log("Четное число");
} else {
  console.log("Нечетное число");
};
//Задание 5
let day = Number(prompt("Введите день недели (1-7):"));
switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Некорректное значение");
}
//Задание 6
let num1 = Number(prompt("Введите два числа:"));
let num2 = Number(prompt("Введите два числа:"));
let message;
if (num1 == num2) {
    message = "Числа равны"
} else {
    message = num1 > num2?"первое число больше":"второе число больше"
};
console.log(message);
//Доп. задание
let month = Number(prompt("Введите номер месяца (1-12):"));
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;

  default:
    console.log("Некорректное значение");
}
