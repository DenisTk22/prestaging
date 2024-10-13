// jsonplaceholder.typicode.com/posts
const url = 'https://jsonplaceholder.typicode.com/posts/1';
fetch(url) // fetch возвращает promise, по умолчанию fetch работает с GET
    // .then(response => {
    //     // console.log(response) // просто response вернет статус запроса и техническую информацию
    // })
    .then(response => {
        if (response.ok) {
            return response.json()// метод json() преобразует response в js object
        }
        throw new Error('Не удалось загрузить');
    })
    .then(console.log)
    .catch(console.error)

// fetch('https://jsonplaceholder.typicode.com/posts/1') // fetch возвращает promise
//     .then(response => response.json())// метод json() преобразует response в js object
//     .then(console.log)

// CRUD - create, read, update, delete
// HTTP - POST, GET, PUT (перезатрет все данные) | PATCH (изменить только нужны данные), DELETE
fetch(url, {
    method: 'PUT', // PATCH, PUT изменяет данные
    body: JSON.stringify({ id: 1, title: 'New title' }) // JSON.stringify преобразует в строку для корректной передачи информации
})
    .then(response => {
        if (response.ok) {
            return response.json()// метод json() преобразует response в js object
        }
        throw new Error('Не удалось загрузить');
    })
    .then(console.log)
    .catch(console.error)

fetch('https://jsonplaceholder.typicode.com/posts', { // при создании нужно обращаться ко всему объекту
    method: 'POST', // POST отправляет данные на сервес / создает данные
    body: JSON.stringify({ id: 101, title: 'New title', body: 'text', userId: 1 }), // нужно передать полную структуру создаваемого блока
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(response => {
        if (response.ok) {
            return response.json()// метод json() преобразует response в js object
        }
        throw new Error('Не удалось загрузить');
    })
    .then(console.log)
    .catch(console.error)