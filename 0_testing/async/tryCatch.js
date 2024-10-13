/// асинхронные функции
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

/// Не явный try catch
// Вокруг функции-исполнителя промиса и его обработчика находися неявный try catch. Если в них где-то происходит исключение, то оно перехватывается, и промис считается отклоненным с этой ошибкой
/** Ошибка, случившаяся в исполнителе или одном из обработчиков, будет передана в ближайший catch (или then, обрабатывающий ошибки вторым колбеком), минуя остальные then. 
    Если catch не предусмотрен, то ошибка выйдет в консоль и скрипт будет приостановлен */
new Promise(function (resolve, reject) {
    resolve(1)
})
    .then(function (result) {
        throw new Error("error")
        console.log(result);
        return result + 1
    })
    .then(function (result) {
        console.log(result);
        return result + 1
    })
    .catch(function (result) {
        console.log(result);
    })

//Throwing Errors - проброс ошибок
/** Мы можем не обрабатывать ошибку в первом же .catch. Вместо этого мы можем пробросить ее дальше с помощью ключевого слова throw. Таким образом мы можем разные типы ошибок обрабюатывать в разных catch */
new Promise(function (resolve, reject) {
    throw new ReferenceError("error")
})
    .catch(function (error) {
        if (error instanceof SyntaxError)
            alert("Syntex error!")
        else
            throw error // пробрасываем ошибку дальше
        console.log(error);
    })
    .catch(function (error) {
        console.log(error);
    })