const uer = 'https://jsonplaceholder.typicode.com/posts/1';
const request = new XMLHttpRequest(); // request - специальный объект
request.open('GET', url); // открыть запрос методом GET по ссылке url
request.responseType = 'json'; // что мы хотим получить в ответ // или xml, text
request.send(); // отправка запроса
request.onload = function() { // после загрузки запуститися наша функция
    const data = request.response; // полжим в data ответ
    console.log(data); // data будет в виде js object
}