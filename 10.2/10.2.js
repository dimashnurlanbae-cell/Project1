//Задание 1
localStorage.setItem('greeting', "Привет, мир!")
const g = localStorage.getItem('greeting');
console.log(g)
//Задание 2
localStorage.removeItem("greeting");
const del = localStorage.getItem("greeting");
console.log(del);
//Задание 3
const user = {
   name: 'Artem',
   age: 120,
 };
localStorage.setItem("user", JSON.stringify(user));
let User = JSON.parse(localStorage.getItem("user"));
console.log(User);
//Задание 4
const u = localStorage.getItem("user")
const q = JSON.parse(u)
q.country = "Almaty"
localStorage.setItem("user", JSON.stringify(q));
User = JSON.parse(localStorage.getItem("user"));
console.log(User);
//Задание 5
const w = localStorage.getItem("user")
if (w) {
    let user = JSON.parse(w)
    console.log(user)
} else {
    const newUser = {
        name: 'Dimash',
        age: 12
    };
    localStorage.setItem("user", JSON.stringify(newUser))
}
//Задание 6
localStorage.clear()
const k = localStorage.getItem("user")
console.log(k)
//Задание 7
const task = [
    { title: "сделать домашнее задание", completed: true},
    { title: "сделать третье задание", completed: true},
    { title: "погулять", completed: false}

]
localStorage.setItem("task", JSON.stringify(task))
const e = JSON.parse(localStorage.getItem("task"));
console.log(e)
//Задание 8
const me = localStorage.getItem("task")
let c = JSON.parse(me)
c[2].completed = true
localStorage.setItem("task", JSON.stringify(task))