

export async function getAdress(ip = '8.8.8.8') {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_rzwPoQzUOvrWR3NsQcvPjmQwFUGrT&ipAddress=${ip}`)
    // .then(response => response.json()) // обработка ответа: полученный response обрабатывается методом json()
    // .then(console.log) // вывод в консоль при необходимости
    return await response.json();
}