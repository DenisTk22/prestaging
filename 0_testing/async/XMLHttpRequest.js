// XMLHttpRequest - это встроенный в браузер объект, который дает возможность делать HTTP-запросы к серверу
//Тестировать страницы с AJAX нужно на локальном сервере (Браузер блокирует все AJAX Запросы, если страница открыта просто как файл в браузере)
//GET
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const request = new XMLHttpRequest(); // request - специальный объект
request.onreadystatechange = function () { // проверка на успешный ответ
    if (this.readyState === 4 && this.status === 200) { // 4 стадия получения ответа
        alert("file.txt: " + this.responseText);
    }
}
request.open('GET', url); // открыть запрос методом GET по ссылке url
request.responseType = 'json'; // что мы хотим получить в ответ // или xml, text
request.send(); // отправка запроса
request.onload = function () { // после загрузки запуститися наша функция
    const data = request.response; // полжим в data ответ
    console.log(data); // data будет в виде js object
}
//POST
const request = new XMLHttpRequest(); // request - специальный объект
request.onreadystatechange = function () { // проверка на успешный ответ
    if (this.readyState === 4 && this.status === 200) { // 4 стадия получения ответа
        alert("file.txt: " + this.responseText);
    }
}
request.open('POST', url);
request.setRequestHeader("Content-type", "applocation/x-www-form-urlencoded");
request.send("param1=value1&param2=value2&param3=value3"); // отправка запроса в urlencoded