//Задание 1
let person = {
   name: "Dimash",
   age: 12,
   city: "Almaty"
};
console.log(person);
//Задание 2
person.city = "Shymkent"
console.log(person.name);
console.log(person.age);
console.log(person.city);
//Задание 3
const greet = function(person) {
   console.log("Привет, меня зовут " + person.name + ", мне " + person.age + " лет!");
};
greet(person);
//Задание 4
let obj1 = { a: 10, b: 20 };
let obj2 = { a: 10, b: 20 };
console.log(obj1 == obj2);
console.log(obj1 === obj2);
//Задание 5
let book = {
  title: "Гарри Поттер",
  author: "Дж. Роулинг",
  details: {
    year: 1997,
    pages: 320
  }
};
let copy = Object.assign({}, book);
copy.details.year = 2026
console.log(book.details.year);
console.log(copy.details.year);
//Задание 6
let calculator = {
  a: 6,
  b: 2,
  sum(){
    return this.a + this.b
  },
  multiplay(){
    return this.a * this.b
  }
}
console.log(calculator.sum())
console.log(calculator.multiplay())
//Задание 7
const car = {
  brand: "bmw",
  model: "v8"
}
car.model = "v7"
console.log(car.model)