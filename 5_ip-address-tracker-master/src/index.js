import './leaflet/dist/leaflet.css';
import L from 'leaflet';
import { validateIp } from './helpers';


const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {// загрузка карты в метод map() библиотеки leaflet
    center: [51.505, -0.09],
    zoom: 13,
}); 

L.tileLayer('https://www.openstreetmap.org/#map=10/37.4443/-78.0716', {
    attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge"target="_blank" > Frontend Mentor</a>.Coded by < a href = "#" > Denis Tkachev</ > ',
    maxZoom: 18,

}).addTo(map)

btn.addEventListener('click', getData); // Обработка по клику
ipInput.addEventListener('keydown', handleKey); // обработка при нажатии на клавишу Enter

function getData() {
    //проверка данных
    if (validateIp(ipInput.value)) {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_rzwPoQzUOvrWR3NsQcvPjmQwFUGrT&ipAddress=${ipInput.value}`)
            .then(response => response.json()) // обработка ответа: полученный response обрабатывается методом json()
            // .then(console.log) // вывод в консоль 20.110.23.11
            .then(setInfo)
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
    }
}

function setInfo(mapData) { // использует полученную информацию
    console.log(mapData);
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = mapData.location.country + ' ' + mapData.location.region;
    timezoneInfo.innerText = mapData.location.timezone;
    ispInfo.innerText = mapData.isp;
}