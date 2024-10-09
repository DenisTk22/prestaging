import 'babel-polyfill';
import '../node_modules/leaflet/dist/leaflet.css'; //../node_modules/leaflet/dist/leaflet.css
import L from 'leaflet';
import { addOffset, addTileLayer, getAdress, validateIp } from './helpers';
import icon from '../images/icon-location.svg';


const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData); // Обработка по клику
ipInput.addEventListener('keydown', handleKey); // обработка при нажатии на клавишу Enter

const markerIcon = L.icon({
    iconUrl: icon, // добавляем картику маркеру
    iconSize: [30, 40], // Размер иконки
});

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {// загрузка карты в метод map() библиотеки leaflet
    center: [51.505, -0.09], // широта и долгота
    zoom: 13,
    zoomControl: false,
}); 

addTileLayer(map); // вызов метода отрисовки карты
L.marker([51.505, -0.09], {icon: markerIcon}).addTo(map); // добавление маркера к карте

function getData() {
    //проверка на корректность IP адреса
    if (validateIp(ipInput.value)) {
            getAdress(ipInput.value)
                .then(setInfo)
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
    }
}

function setInfo(mapData) { // использует полученную информацию
    const {lat, lng, country, region, timezone } = mapData.location; // деструкторизация
    // ipInfo.innerText = mapData.ip;
    // locationInfo.innerText = mapData.location.country + ' ' + mapData.location.region;
    // timezoneInfo.innerText = mapData.location.timezone;
    // ispInfo.innerText = mapData.isp;
    //после деструкторизации записываем короче:
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = country + ' ' + region;
    timezoneInfo.innerText = timezone;
    ispInfo.innerText = mapData.isp;

    map.setView([lat, lng]);
    L.marker([lat, lng], {icon: markerIcon}).addTo(map);

    //запускаем смещение маркира только на экране телефона, делаем проверку с помощью matchMedia()
    if (matchMedia("max-width: 1023px").matches) {
        addOffset(map);
    }
    
}

// смещение маркера на видимую область после загрузки карты
document.addEventListener('DOMContentLoaded', (ev) => {
    getAdress('102.22.22.1').then(setInfo)
})