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
    body: JSON.stringify({id: 1, title: 'New title'}) // JSON.stringify преобразует в строку для корректной передачи информации
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
    body: JSON.stringify({id: 101, title: 'New title', body: 'text', userId: 1}), // нужно передать полную структуру создаваемого блока
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

// асинхронные функции
// https://learn.javascript.ru/try-catch
async function getUsers() { // для стрелочной ф: const getUsers = async () => {}
    try { // в async await нет .catch, поэтому ошибки обрабатываются через try/catch
        const response = await fetch(url); //await позволяет получить результат работы промиса
        const data = await response.json();
        console.log(data); // Обработка data вместо return
        throw new Error('Ошибка!!!');
        
    } catch (error) {
        console.error(error.message);
    } 
}
getUsers(); 
// так как асинхронная функция вовзвращает promise, то для обработки ответа используется .then()
getUsers().then(console.log)

// порядок выполнения
getUsers(); // как только код дойдет до await, код будет выполнят следующую строку: console.log(1);
console.log(1); //  синхронный код выполнится первым