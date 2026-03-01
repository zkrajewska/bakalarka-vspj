import { initFloorPlan } from './models/01-floorPlanAnimation.js';
import { initBucketElevator } from './models/02-bucketElevator.js';
import { initLoadingBarley } from './models/03-LoadingBarleyIntoTheGranary.js';
import { initMaltingFloor } from './models/04-maltingFloor.js';
import { initFreightElevator } from './models/05-freightElevator.js';
import { initUnloadingBarley } from './models/06-unloadingBarleyFromTheGranary.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // Функция для загрузки SVG
    // Укажи правильный путь к твоему файлу (судя по твоему скриншоту, он лежит в source-files/svgs/)
    fetch('source-files/svgs/01-floorPlanAnimation.svg')
        .then(response => response.text()) // Получаем код файла как текст
        .then(svgCode => {
            // Вставляем полученный код в наш пустой div
            document.getElementById('01-floorPlanAnimation').innerHTML = svgCode;
            
            // ВАЖНО: Запускаем GSAP только ПОСЛЕ того, как картинка вставилась на страницу!
            initFloorPlan();
        })
        .catch(error => console.error("Ошибка загрузки SVG:", error));

    fetch('source-files/svgs/02-bucketElevator.svg')
        .then(response => response.text()) // Получаем код файла как текст
        .then(svgCode => {
            // Вставляем полученный код в наш пустой div
            document.getElementById('02-bucketElevator').innerHTML = svgCode;
            
            // ВАЖНО: Запускаем GSAP только ПОСЛЕ того, как картинка вставилась на страницу!
            initBucketElevator();
        })
        .catch(error => console.error("Ошибка загрузки SVG:", error));

    fetch('source-files/svgs/03-LoadingBarleyIntoTheGranary.svg')
        .then(response => response.text()) // Получаем код файла как текст
        .then(svgCode => {
            // Вставляем полученный код в наш пустой div
            document.getElementById('03-LoadingBarleyIntoTheGranary').innerHTML = svgCode;
            
            // ВАЖНО: Запускаем GSAP только ПОСЛЕ того, как картинка вставилась на страницу!
            initLoadingBarley();
        })
        .catch(error => console.error("Ошибка загрузки SVG:", error));


    fetch('source-files/svgs/04-maltingFloor.svg')
        .then(response => response.text()) // Получаем код файла как текст
        .then(svgCode => {
            // Вставляем полученный код в наш пустой div
            document.getElementById('04-maltingFloor').innerHTML = svgCode;
            
            // ВАЖНО: Запускаем GSAP только ПОСЛЕ того, как картинка вставилась на страницу!
            initMaltingFloor();
        })
        .catch(error => console.error("Ошибка загрузки SVG:", error));

    fetch('source-files/svgs/05-freightElevator.svg')
        .then(response => response.text()) // Получаем код файла как текст
        .then(svgCode => {
            // Вставляем полученный код в наш пустой div
            document.getElementById('05-freightElevator').innerHTML = svgCode;
            
            // ВАЖНО: Запускаем GSAP только ПОСЛЕ того, как картинка вставилась на страницу!
            initFreightElevator();
        })
        .catch(error => console.error("Ошибка загрузки SVG:", error));

    fetch('source-files/svgs/06-unloadingBarleyFromTheGranary.svg')
        .then(response => response.text()) // Получаем код файла как текст
        .then(svgCode => {
            // Вставляем полученный код в наш пустой div
            document.getElementById('06-unloadingBarleyFromTheGranary').innerHTML = svgCode;
            
            // ВАЖНО: Запускаем GSAP только ПОСЛЕ того, как картинка вставилась на страницу!
            initUnloadingBarley();
        })
        .catch(error => console.error("Ошибка загрузки SVG:", error));

});


