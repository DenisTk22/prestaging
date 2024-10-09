

export function addOffset(map) {
    const offsetY = map.getSize().y * 0.1; //getSize() метод из докуметации leaflet, получаем координату по y, делаем отступ по y*0.1

    map.panBy([0, -offsetY], {animate: false}) //panBy() метод из докуметации leaflet, на сколько нужно подвинуть. Сдвинуть по y вниз (-offsetY), animate: false - убирает анимацию
}