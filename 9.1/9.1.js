//Задание 1
let count = 0;
while (count < 11) {
   console.log(count);
   count++;
}
//Задание 2
let count1 = 0;

while (count1 < 10) {
   count1++;
   if (count1 === 5) {
       continue;
   }
   console.log(count1);
}

console.log("Цикл завершен");
let count2 = 0;

while (count2 < 10) {
   console.log(count2);
   count2++;
   if (count2 === 8) {
       break;
   }
}

console.log("Цикл завершен");
//Задание 3
let count3 = 1;
do {
   console.log(count3);
   count3++;
} while (count3 < 6);
//Задание 4
let input;
while (input !== "50") {
   input = prompt("Введите '50' для завершения");
   console.log("Вы ввели: " + input);
};
//Задание 5
for (let i = 0; i < 11; i++) {
   console.log(i);
};
//Задание 6
for (let i = 0; i < 101; i++) {
    console.log(i)
}
//Задание 7
let numbers = [1,2,3,4,5]
for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i]);
}
//Задание 8
for (let i = 0; i < 11; i++) {
   console.log(i);
}
let index = 0;
let numbers1 = [1, 2, 10, 15, 2];
let sum = 0;
while (index < 5) {
   sum = sum + numbers[index];
   index++;
}
console.log(sum);
//Задание 9
for (let i = 10; i > 0; i--) {
    console.log(i)
}
//Задание 10
for (let i = 1; i < 10; i++) {
    if (i %2== 0) {
        console.log(i)
    }
    else {
        continue;
    };
}