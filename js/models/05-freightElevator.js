export function initFreightElevator() {

   

    const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1
    });

    const travelTime = 5;

    // Выбираем все части лифта, которые должны ехать
    const elevatorBox = [
        "#cabin-box-left", 
        "#cabin-box-right",
        "#cable-foundation"
    ];

    // Запускаем анимацию
    tl.to(elevatorBox, {
        y: -4450,              // Значение сдвига вверх (подбери точное число по высоте этажей)
        duration: travelTime,           // Длительность поездки в одну сторону (в секундах)
        ease: "power2.inOut",  // Плавный разгон и торможение
    }, 0);

    const elevatorCabels = [
        "#cable-right", 
        "#cable-left"
    ];

        // Запускаем анимацию
    tl.to(elevatorCabels, {
        scaleY: 0,           // Сжимаем кабель до 10% от его изначальной длины
        transformOrigin: "top", // Точка трансформации - верхний край кабеля
        opacity: 0,
        duration: 4.5,           // Время должно совпадать с движением кабин (5 сек)
        ease: "power2.inOut",  // Должно совпадать с движением кабин
    }, 0);

    tl.to("#main-cable", {
        scaleY: 0.03,           // Сжимаем кабель до 10% от его изначальной длины
        transformOrigin: "top", // Точка трансформации - верхний край кабеля
        duration: travelTime,           // Время должно совпадать с движением кабин (5 сек)
        ease: "power2.inOut",  // Должно совпадать с движением кабин
    }, 0);
}