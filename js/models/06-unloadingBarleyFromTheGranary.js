export function initUnloadingBarley() {

    // Собираем все 4 кучи в один массив по их ID
    const grainPiles = [
        "#grain-pile1", 
        "#grain-pile2", 
        "#grain-pile3", 
        "#grain-pile4",
        "#grain-pile5",
        "#grain-pile6",
        "#grain-pile7"
    ];

    // Прибиваем точку роста каждой кучи к самому низу (к полу)
    gsap.set(grainPiles, { 
        transformOrigin: "50% 100%" 
    });

    // Запускаем анимацию роста
    gsap.fromTo(grainPiles, 
        // НАЧАЛО: сплющены в ноль и прозрачны
        { 
            scaleY: 0,
            opacity: 0
        }, 
        // КОНЕЦ: полный размер
        { 
            scaleY: 1,
            opacity: 1,
            duration: 5,         // Каждая куча растет 5 секунд
            ease: "power2.out",  // Чуть замедляется в конце
            
            // МАГИЯ ЗДЕСЬ: каждая следующая куча начнет расти на 1 секунду позже предыдущей!
            stagger: 1,          
            
            repeat: -1,          // Бесконечный цикл
            repeatDelay: 2       // Пауза 2 секунды, когда все вырастут
        }
    );

    // 1. Верхняя куча (#grain2) - убывает, "стекая" вниз в воронку
    gsap.fromTo("#grain2", 
        { scaleY: 1 }, 
        { 
            scaleY: 0.1, 
            duration: 10,             
            ease: "none", 
            // Жестко прибиваем точку к низу верхней кучи
            transformOrigin: "50% 100%", 
            repeat: -1,               
            repeatDelay: 1            
        }
    );



    // 3. Воронка (#grain1) - легкая пульсация, имитирующая проваливание зерна
    gsap.to("#grain1", {
        scaleY: 0.9,
        y: 2,                 // Чуть-чуть дергается вниз
        duration: 0.2,
        yoyo: true,           // Возвращается обратно
        repeat: -1,           // Дергается постоянно
        ease: "sine.inOut",
        transformOrigin: "top center"
    });

    // 4. Падающая струя (если ты добавила линию #grain-stream)
    if (document.querySelector("#grain-stream")) {
        gsap.to("#grain-stream", {
            strokeDashoffset: -24, // 12 (длина штриха) + 12 (пробел)
            duration: 0.2,
            ease: "none",
            repeat: -1
        });
    }

}