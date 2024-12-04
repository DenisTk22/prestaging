export const URL = 'https://api.spacexdata.com/v3/cores';

/** async await*/
async function getCoreSerial() { // для стрелочной ф: const getUsers = async () => {}
    const response = await fetch(URL); //await позволяет получить результат работы промиса
    const data = await response.json();
    const coreSerial = data.map(core => { return core.core_serial })
    return coreSerial;
}

getCoreSerial()
            .then(console.log)
            .catch(console.error)
            .finally(console.log(`Был запрос по адресу: ${URL}`))

/** new  Promise*/
const getStatus = new Promise((resolve, reject) => {
    fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка ответа сети')
            } 
            return response.json()
        })
        .then((data) => resolve(data.map(core => { return core.status})))
        .catch((error) => reject(error));
});

getStatus
        .then((data) => {
            console.log('Статусы:', data);
        })
        .catch((error) => {
            console.error('Ошибка загрузки данных', error);
        })