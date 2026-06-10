//Задание 1
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        console.log("Заголовок:", data.title);
        console.log("Текст:", data.body);
    })
    .catch(error => console.error("Ошибка:", error))
//Задание 2
const data = { title: "Новый пост", body: "Содержимое поста", userId: 1 };
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => console.log("успешное создание поста:", data))
    .catch(error => console.error("Ошибка:", error));
//Задание 3
fetch("https://jsonplaceholder.typicode.com/nonexistent")
    .then(response => {
        if (!response.ok) {
            throw new Error("Ошибка ссылки (неверный URL)");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error("Обработанная ошибка:", error));
//Задание 4
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: "новый заголовок",
        body: "текст",
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((data) => console.log('Результат PUT:', data));
//Задание 5
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: "новый заголовок",
        body: "текст",
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((data) => console.log('Результат PUT:', data));
async function update() {
    try {
        resp = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: "новый заголовок",
                body: "текст",
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        data = resp.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
//Задание 6 
fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "GET",
    headers: {
        'User-Agent': "chrome",
        'Authorization': "bearer djswp"
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Ошибка:", error));