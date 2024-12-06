export const URL = 'https://api.spacexdata.com/v3/cores';

/** async await*/
async function getData():Promise<[]> { // для стрелочной ф: const getUsers = async () => {}
    const response = await fetch(URL); //await позволяет получить результат работы промиса
    if (!response.ok) {
        throw new Error('Ошибка ответа сети')
    } 
    return response.json()
}

const getSrial = async () =>
  {getData()
            .then((data) => {
                const serials = data.map((core: { core_serial: []; }) => { return core.core_serial });
                console.log('Серийные номера: ', serials);
            })
            // .catch(console.error)
            .finally(console.log(`Был запрос по адресу: ${URL}`));

            
}
/** new  Promise*/
// const getStatus = new Promise((resolve, reject) => {
//     fetch(URL)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Ошибка ответа сети')
//             } 
//             return response.json()
//         })
//         .then((data) => resolve(data.map(core => { return core.status})))
//         .catch((error) => reject(error));
// });

// getStatus
//         .then((data) => {
//             console.log('Статусы:', data);
//         })
//         .catch((error) => {
//             console.error('Ошибка загрузки данных', error);
//         })


// const getSerials = async () => {
    
//      console.log('Серийные номера: ', await getSrial);
// }

getSrial()