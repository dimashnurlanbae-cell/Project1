//Задание 1
const greet = function() {
   console.log("Привет мир!");
};
greet();
//Задание 2
let name1 = prompt("Введите ваше имя:")
function sayHello(name1) {
   console.log("Привет, " + name1 + "!");
}
sayHello(name1);
//Задание 3
function sum(a, b) {
  return a + b;
}
let result = sum(5, 3);
console.log(result);
//Задание 4
let num = Number(prompt("Введите четное или нечетное число:"));
function isEven(num) {
   return num % 2 == 0
};
console.log(isEven(num));
//Задание 5
let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
function max(a, b) {
   if (a > b) {
      return a
   }
   else if (a < b) {
      return b 
   }
   else {
      return "Числа равны"
   };
}
console.log(max(num1,num2));
//Задание 6
let name = prompt("Введите ваше имя:")
let surname = prompt("Введите вашу фамилию:")
function getInitials(name,surname) {
   let namename = name[0]
   let surnamesurname = surname[0]
   return namename + "." + surnamesurname + ".";
};
console.log(getInitials(name,surname));
//Задание 7 
let cv = prompt("Введите любое число:")
function square(cv) {
   return cv * cv
}
console.log(square(cv));

let cub = prompt("Введите любое число:")
function cube(cub) {
   return cub * square(cub)
}
console.log(cube(cub));
//Задание 8 
const sum2 = (a, b) => {
  return a + b;
}
let result1 = sum2(5, 3);
console.log(result1);
//Доп. задание
function getFactorial(factorial) {
   if (factorial <= 1) {
      return 1
   }
   return factorial * getFactorial(factorial - 1)
}
console.log(getFactorial(7))
