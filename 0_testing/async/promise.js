// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise

const promise1 = new Promise((resolve, reject) => { // promise (это Объект) создается через конструктор Promise и возвращает всегда promise, поэтому он обрабатывается через .then / .catch / .finally. new Promise редко создается в ручную
  setTimeout(() => {
    resolve(10); // task1
  }, 300);
});

promise1.then((value) => { // task2// когда мы используем .then мы эту функцию передает на место resolve. Выполнение кода в  task1 служит тригером для выполнения кода в task2 и передачи в него значения из task1
  return value + 4; //task3 // выполнение кода в task2 служит триггером для запуска task3 и передачи в него значения из task2. Вoзвращает promise

}, console.error) // error1 либо через catch. Сюда код прыгнит в случае ошибки и value передастся сюда
  .then((value) => value - 1) // task4 // выполнение кода в task3 служит триггером для запуска task4 и передачи в него значения из task3.
  .then((value) => value + 4) // task5 // выполнение кода в task4 служит триггером для запуска task5 и передачи в него значения из task4.
  .then(console.dir)
  .catch(console.error) // error2 заменяет error1
  .finally(fn6) // тоже принимает функцию и она выполняется в любом случае // например, когда используется для preloader, после загрузки его нужно убрать, используется finally

console.log(promise1); // task4 // Этот синхронный кода выполнится в первую очередь, потом выполнится асинхронный код task1 --> task2 --> task3

// Пример последовательности выполнения задач:
function withPromise() { return new Promise((resolve, reject) => { resolve('Hello from Promise') }) };

console.log('Hi here me first'); // task11
setTimeout(() => { console.log('I am from setTimeout') }, 0) // task12
withPromise().then(console.log).catch(value => console.log(value + '!!!')) // task13
console.log('Hi here me second'); // task14

// Последовательность: task11 / task14 / task13 / task12
/**
 * Сначало выполняется синхронный код по порядку task11 / task14 - после попадания в callback stack они выполняются
 * Потом setTimeout() попадает в --> callback stack --> Web APIs (ждет там заданное время - 0 сек) --> task queue --> потом выполняется в порядке очереди и после освобождения callback stack
 * Потом идет Promise попадает в --> callback stack --> Web APIs  --> microtask queue (очередь для promise) --> потом выполняется в порядке очереди и после освобождения callback stack и перед функциями из task queue
 */

/// методы promise: Promise.resolve() и Promise.reject() используются на стадии разработки
async function getPictures() { // для стрелочной ф: const getUsers = async () => {}
  // const response = await fetch('https://jsonplaceholder.typicode.com/pictures'); //await позволяет получить результат работы промиса
  // const data = await response.json();
  // return data;

  // return Promise.resolve([{id: 1, src: '#'},{id: 2, src: '#'} ]); //имитация корректного ответа от сервера - moc данные
  return Promise.reject('Не правильные данные');//имитация ошибки ответа от сервера
}

getPictures()
  .then()
  .catch()

///методы promise:  Promise.all(iterable), Promise.allSettled(iterable), Promise.race(iterable)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
async function getPosts() { // для стрелочной ф: const getUsers = async () => {}
  const response = await fetch('https://jsonplaceholder.typicode.com/posts'); //await позволяет получить результат работы промиса
  const data = await response.json();
  return data;
}

async function getUsers() { // для стрелочной ф: const getUsers = async () => {}
  const response = await fetch('https://jsonplaceholder.typicode.com/users'); //await позволяет получить результат работы промиса
  const data = await response.json();
  return data;
}

async function getComments() { // для стрелочной ф: const getUsers = async () => {}
  const response = await fetch('https://jsonplaceholder.typicode.com/comments'); //await позволяет получить результат работы промиса
  const data = await response.json();
  return data;
}
//Promise.all - вернет в ответ новый промис если все данные получены, если хотя одни данные не отработают, вернет ошибку
Promise.all([getPosts(), getUsers(), getComments()]) //принимает массив промисов и выдает промис
  .then(values => {
    //console.log(values);// value тут массив массивов [[port1], [user1], [comments1]], их можно деструктурировать
    const [posts, users, comments] = values;
    console.log(posts, users, comments);
  })
  .catch(console.error);

//Promise.allSettled(iterable) - вернет ответ от тех данных, которые отработали, от других вернет ошибку
//Promise.race(iterable) - ожидает исполнение или отклонение любого из полученных промисов, остальные остановят работу
async function getPostsBerlin() { // для стрелочной ф: const getUsers = async () => {}
  const response = await fetch('https://jsonplaceholder.typicode.com/berlin/posts'); //await позволяет получить результат работы промиса
  const data = await response.json();
  return data;
}
async function getPostsNY() { // для стрелочной ф: const getUsers = async () => {}
  const response = await fetch('https://jsonplaceholder.typicode.com/ny/posts'); //await позволяет получить результат работы промиса
  const data = await response.json();
  return data;
}
async function getPostsDefault() { // для стрелочной ф: const getUsers = async () => {}
  const response = await fetch('https://jsonplaceholder.typicode.com/default/posts'); //await позволяет получить результат работы промиса
  const data = await response.json();
  return data;
}

Promise.race([getPostsBerlin(), getPostsNY(), getPostsDefault()]) // вернет только один promise
  .then();

/// Promise
function startTask() {
  let promise = new Promise(
    function longTaskExecution(resolve, reject) {
      //эта функция будет выполняться асинхронно
    }
  )
  return promise;
};

let promise = startTask();// promise содержит в себе текущее состояние задачи и результат выполнения во внутренних свойствах result и state: pending - ожидание / fulfilled - выполнено успешно / rejected - выполнено с ошибкой. В вызывающем коде мы можем подписаться на изменение состояния задачи с помощью методов промиса .then, .catch и .finnaly

promise.then( // метод .then принимает два callback:
  function (result) {/**обрабатывается успешное выполнение */ }, // первый будет вызван при изменении состояния на fulfilled
  function (error) {/**обрабатывается ошибка */ } // второй - при изменении состояния на rejected
)
  .catch( // метод .catch обрабатывает только ошибку, он будет вызван при изменении состояния на rejected
    function (error) {/**обрабатывается ошибка */ }
  )
  .finnaly( // метод .finnaly принимает callback, который будет вызван в любом случае
    function () {/**выполняется в любом случае */ }
  )