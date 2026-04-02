//Задание 1
let fruits = ["Яблоко", "Банан", "Апельсин"];
console.log(fruits);
//Задание 2
console.log(fruits[2]);
fruits.push("Груша");
//Задание 3
let Fruit = fruits.pop();
let Fruit2 = fruits.shift();
console.log(fruits)
//Задание 4
fruits.forEach(function(item) {
  console.log(item);
});
//Задание 5
let lengths = fruits.map(item => item.length);
console.log(lengths);
//Задание 6
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
//Задание 7
let sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = sum.reduce((summ, c) => summ + c, 0)
console.log(result)
//Задание 8 
let result2 = numbers.find(num => num > 5);
console.log(result2);
//Задание 9
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arrr = arr1.concat(arr2);
console.log(arrr); 
//Задание 10
let Banan = fruits.includes("Банан");
console.log(Banan);
//Задание 11
fruits.reverse();
console.log(fruits);