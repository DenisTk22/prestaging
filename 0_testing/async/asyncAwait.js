///Для упрощения работы с промисами используетося синтаксис async/await
async function getPictures() { // для стрелочной ф: const getUsers = async () => {}
    const response = await fetch('https://jsonplaceholder.typicode.com/pictures'); //await позволяет получить результат работы промиса. await заставляет интерпритатор ждать пока не выполнится это код прежде чем пойти дальше
    const data = await response.json();
    return data;
}

//сокращение синтаксиса
function func() {
    return new Promise(function (resolve, reject) {
        resolve(1)
    })
}
// или
async function func() {
    return 1 // вернет промис, а 1 это результат выполнения промиса
}

func()
    .then(function (result) {
        console.log("Результат промиса: " + result); // 1
    })

// загрузка наскольких картинок с помощью async await
async function func() {
    let i1 = await loadImageWithPromise("image1.png"); // Интерпритатор будет ждать пока не выполнится этот код прежде чем пойти дальше
    let i2 = await loadImageWithPromise("image2.png");
    let i3 = await loadImageWithPromise("image3.png");
    return [i1, i2, i3] // возвращает промис с массивом
}

func()
    .then(function (result) {
        console.log("Результат промиса: " + result);
    })

/// await and error
async function func() {
    try {
        let i1 = await loadImageWithPromise("image1.png");
        let i2 = await loadImageWithPromise("image2222.png"); // если в await завершается с ошибкой, то он просто пробрасывает эту ошибку как throw и её можно отловить через try catch
        let i3 = await loadImageWithPromise("image3.png");
        return [i1, i2, i3] // возвращает промис с массивом
    } catch (e) {
        console.log("ERROR! " + e.message);
        return null
    }
}

func()