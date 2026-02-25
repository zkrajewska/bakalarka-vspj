gsap.registerPlugin(MotionPathPlugin);

export function initBucketElevator() {

    const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1
    });

    const travelTime = 5;
    const buckets = gsap.utils.toArray(".bucket");

    // Запускаем цикл для каждого ковша
    buckets.forEach((bucket, index) => {
        
        gsap.set(bucket, { rotation: 0 });

        let bucketTween = gsap.to(bucket, {
            duration: 50,             // Время одного полного круга 
            repeat: -1,              // Бесконечно
            ease: "none",            // Обязательно равномерно, без рывков
            motionPath: {
                path: "#conveyor-belt",  // ID линии, по которой они поедут
                align: "#conveyor-belt", // Привязываем ковши к линии
                alignOrigin: [1, 1], // Центрируем ковш на линии
                autoRotate: 120        // Ковши будут поворачиваться по изгибам ленты
            }
        });

        // Магия распределения: каждый ковш сдвигается на свою часть пути
        bucketTween.progress(index / buckets.length);
    });

    // Выбираем все пути внутри группы #grain
    const grains = gsap.utils.toArray("#grain path");

    // 1. Сначала мы лечим баг SVG: принудительно задаем всем зернам чистый паттерн без нулей!
    gsap.set(".grain", { 
        strokeDasharray: "36.482, 29.186" 
    });

    // 2. Группируем НИЖНИЕ зерна (1, 2, 3)
    const bottomGrains = ["#grain1", "#grain2", "#grain3"];
    
    gsap.to(bottomGrains, {
        strokeDashoffset: -65.668, 
        duration: 0.5,   // Скорость для нижних (можешь менять)
        ease: "none",    
        repeat: -1       
    });

    // 3. Группируем ВЕРХНИЕ зерна (4, 5, 6)
    const topGrains = ["#grain4", "#grain5", "#grain6"];
    
    gsap.to(topGrains, {
        strokeDashoffset: -65.668, 
        duration: 0.5,   // Скорость для верхних
        ease: "none",    
        repeat: -1       
    });

    gsap.to("#chain", {
    // ВАЖНО: Направление движения
    // Если цепь должна ехать ВНИЗ, ставь положительное число: 65.668
    // Если цепь должна ехать ВВЕРХ, ставь с минусом: -65.668
        strokeDashoffset: 65.668, 
    
        duration: 0.5,   // Скорость движения цепи (подгони под скорость ковшей)
        ease: "none",    // Равномерное движение без рывков
        repeat: -1       // Крутим бесконечно
    });

    // 1. Анимируем ВЕРХНЮЮ шестеренку
    gsap.to("#pulley-top", {
        rotation: 360,               // Крутим на один полный оборот
        svgOrigin: "985.4 422.9",    // Идеально точные координаты центра!
        duration: 4,                 // Скорость вращения
        ease: "none",                // Равномерно, без торможений
        repeat: -1                   // Бесконечно
    });

    // 2. Анимируем НИЖНЮЮ шестеренку
    gsap.to("#pulley-bottom", {
        rotation: 360,
        svgOrigin: "1010.2 2534.3",  // Точный центр нижнего колеса
        duration: 4,                 // Скорость (должна быть такой же, как у верхнего)
        ease: "none",
        repeat: -1
    });
}