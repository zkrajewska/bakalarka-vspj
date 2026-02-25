gsap.registerPlugin(MotionPathPlugin);

export function initLoadingBarley() {

    // 1. Собираем все линии зерна из всех трех групп
    const grainPaths = gsap.utils.toArray([
        "#falling-grain1 path",
        "#falling-grain2 path",
        "#falling-grain3 path"
    ]);

    // 2. Запускаем бесконечный поток
    gsap.to(grainPaths, {
        strokeDashoffset: -16.52, // Смещаем ровно на один цикл (штрих + пробел)
        duration: 0.6,            // Скорость падения (0.2 - это очень быстро, как раз для зерна)
        ease: "none",             // Равномерно, чтобы не было рывков
        repeat: -1                // Бесконечно
    });

    // 1. Находим все наши квадратики
    const scoops = gsap.utils.toArray(".scoop");

    // 2. Запускаем цикл для каждого квадратика
    scoops.forEach((scoop, index) => {
        
        // Создаем временную шкалу для элемента
        let tl = gsap.timeline({
            repeat: -1,                // Крутим бесконечно
            defaults: { ease: "none" } // Важно: движение должно быть равномерным
        });

        // Прячем квадратик перед стартом и выравниваем его центр
        gsap.set(scoop, { 
            opacity: 0, 
            transformOrigin: "50% 50%" 
        });

        const totalDuration = 12; // Общее время в пути от низа до верха (6 секунд)

        // ДЕЙСТВИЕ 1: Движение по линии (занимает все 6 секунд)
        tl.to(scoop, {
            duration: totalDuration,
            motionPath: {
                path: "#scoop-motionpath",
                align: "#scoop-motionpath",
                alignOrigin: [0.5, 0.5]
            }
        }, 0); // Ноль означает: "Начать в самую 0-ю секунду"

        // ДЕЙСТВИЕ 2: Управление прозрачностью (работает параллельно с движением)
        tl.to(scoop, { opacity: 1, duration: 0.8 }, 0)                    // Плавное ПОЯВЛЕНИЕ в первые 0.8 сек
          .to(scoop, { opacity: 0, duration: 0.8 }, totalDuration - 0.8); // Плавное ИСЧЕЗНОВЕНИЕ за 0.8 сек до конца

        // ДЕЙСТВИЕ 3: Распределяем их равномерно по всей длине конвейера
        tl.progress(index / scoops.length);
        });
}