//Задание 1
setTimeout(() => {
   console.log("Привет, мир!");
 }, 2000);
//Задание 2
let c = 0
const i = setInterval(() => {
  const t=new Date()
  console.log(t.getHours()+":"+ t.getMinutes()+":"+ t.getSeconds())
    c++;
  if (c >= 5) {
    clearInterval(i);
  }
}, 1000);
//Задание 4
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Данные получены!');
    }, 3000);
  });
}
fetchData().then((result) => {
  console.log(result);
});
//Задание 5
function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Ошибка загрузки!"));
    }, 2000);
  });
}

fetchDataWithError()
  .catch(error => {
    console.log(error.message);
  })
//Задание 6
async function fetchDataAsync() {
  const a = await fetchData();
  console.log(a)
}
fetchDataAsync()
//Задание 7
async function fetchDataWithErrorAsync() {
  try {
    const k = await fetchDataWithError();
    console.log(k);
  } catch (error) {
    console.log(error.message);
  }
}
//Задание 8
async function task1() {
  return new Promise((res)=> {
    setTimeout(() => {
      res("task1")
    },1000)
  })
}
async function task2() {
  return new Promise((res)=> {
    setTimeout(() => {
      res("task2")
    },2000)
  })
}
async function run() {
  res1 = await task1()
  res2 = await task2()
console.log(res1)
console.log(res2)
}
run()
//Задание 9
async function taskA() {
  return new Promise((ress)=> {
    setTimeout(() => {
      ress("taskA")
    },2000)
  })
}
async function taskB() {
  return new Promise((ress)=> {
    setTimeout(() => {
      ress("taskB")
    },3000)
  })
}
async function Promiseall() {
  ress1 = await Promise.all([taskA(), taskB()])
  console.log(ress1)
}
Promiseall()
//Задание 10
async function delayedMessage(message, delay) {
  await setTimeout(() => {
    console.log(message)
  },delay);
}
delayedMessage("Привет",2000)