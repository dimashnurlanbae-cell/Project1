//Задание 1
//AJAX — это технология, которая позволяет сайтам в фоновом режиме обмениваться данными с сервером и мгновенно обновлять отдельные элементы контента на экране без полной перезагрузки веб-страницы.
//Задание 2
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// xhr.onload = function() {
//  if (xhr.status === 200) {
//    const data = JSON.parse(xhr.responseText);
//    console.log(data);
//  } else {
//    console.error('Ошибка загрузки данных:', xhr.status);
//  }
// };
// xhr.send();
//Задание 3
// const xhrr = new XMLHttpRequest();
// xhrr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// xhrr.responseType = 'json';
// xhrr.onload = function () {
//     if (xhrr.status >= 200 && xhrr.status < 300) {
//         const posts = xhrr.response;
//         const ul = document.getElementById('posts-list');
//         posts.forEach(post => {
//             const li = document.createElement('li');
//             li.textContent = post.title; 
//             ul.appendChild(li); 
//         });
//     } else {
//         console.error('Ошибка сервера. Статус:', xhr.status);
//     }
// };
// xhrr.onerror = function () {
//     console.error('Ошибка сети.');
// };
// xhrr.send();
//Задание 4
// const xhrr = new XMLHttpRequest();
// xhrr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// xhrr.responseType = 'json';
// xhrr.onload = function () {
//     if (xhrr.status >= 200 && xhrr.status < 300) {
//         const posts = xhrr.response;
//         const ul = document.getElementById('posts-list');
//         posts.forEach(post => {
//             const li = document.createElement('li');
//             li.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//             <h5>Пользователь: ${post.userId}</h5>
//             `
//             ul.appendChild(li); 
//         });
//     } else {
//         console.error('Ошибка сервера. Статус:', xhrr.status);
//     }
// };
// xhrr.onerror = function () {
//     console.error('Ошибка сети.');
// };
// xhrr.send();
//Задание 5
// const xhrr = new XMLHttpRequest();
// xhrr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// xhrr.responseType = 'json';
// xhrr.onload = function () {
//     try {
//     if (xhrr.status >= 200 && xhrr.status < 300) {
//         const posts = xhrr.response;
//         const ul = document.getElementById('posts-list');
//         posts.forEach(post => {
//             const li = document.createElement('li');
//             li.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//             <h5>Пользователь: ${post.userId}</h5>
//             `
//             ul.appendChild(li); 
//         });
//     } else {
//         console.error('Ошибка сервера. Статус:', xhrr.status);
//     }
// }
// catch{console.error("Неизвестная ошибка")}
// };
// xhrr.onerror = function () {
//     console.error('Ошибка сети.');
// };
// xhrr.send();
//Задание 6
const loading = document.getElementById('loading');
loading.textContent = 'Загрузка данных...';

const xhrr = new XMLHttpRequest();

xhrr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhrr.responseType = 'json';

xhrr.onload = function () {
    // loading.remove();

    try {
        if (xhrr.status >= 200 && xhrr.status < 300) {
            const posts = xhrr.response;
            const ul = document.getElementById('posts-list');
            loading.style.display = 'none'
            posts.forEach(post => {
                const li = document.createElement('li');

                li.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <h5>Пользователь: ${post.userId}</h5>
                    `
                ;

                ul.appendChild(li);
            });
        } else {
            console.error('Ошибка сервера. Статус:', xhrr.status);
        }
    } catch {
        console.error('Неизвестная ошибка');
    }
};

xhrr.onerror = function () {
    // loading.remove();
    console.error('Ошибка сети.');
};

xhrr.send();