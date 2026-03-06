import { initFloorPlan } from './models/01-floorPlanAnimation.js';
import { initBucketElevator } from './models/02-bucketElevator.js';
import { initLoadingBarley } from './models/03-LoadingBarleyIntoTheGranary.js';
import { initMaltingFloor } from './models/04-maltingFloor.js';
import { initFreightElevator } from './models/05-freightElevator.js';
import { initUnloadingBarley } from './models/06-unloadingBarleyFromTheGranary.js';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const modelsData = [
    { id: '01-floorPlanAnimation', path: 'source-files/svgs/01-floorPlanAnimation.svg', init: initFloorPlan },
    { id: '02-bucketElevator', path: 'source-files/svgs/02-bucketElevator.svg', init: initBucketElevator },
    { id: '03-LoadingBarleyIntoTheGranary', path: 'source-files/svgs/03-LoadingBarleyIntoTheGranary.svg', init: initLoadingBarley },
    { id: '04-maltingFloor', path: 'source-files/svgs/04-maltingFloor.svg', init: initMaltingFloor },
    { id: '05-freightElevator', path: 'source-files/svgs/05-freightElevator.svg', init: initFreightElevator },
    { id: '06-unloadingBarleyFromTheGranary', path: 'source-files/svgs/06-unloadingBarleyFromTheGranary.svg', init: initUnloadingBarley }
];

const loadedTimelines = {};

async function loadSVG(model) {
try {
        const response = await fetch(model.path);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const svgCode = await response.text();
        const container = document.getElementById(model.id);
        
        if (container) {
            container.innerHTML = svgCode;
            // save timeline by id
            loadedTimelines[model.id] = model.init();
        }
    } catch (e) {
        console.error("error loading model " + model.id, e);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    // load all svg
    await Promise.all(modelsData.map(loadSVG));
    
    // use timeout for brouser loading svg
    requestAnimationFrame(() => {
        setTimeout(() => {
            // refresh scrolltriger
            ScrollTrigger.refresh();

            const pages = document.querySelectorAll('[id^="page"]');

            pages.forEach((page, i) => {
                const modelId = modelsData[i].id;
                const tl = loadedTimelines[modelId];

                if (tl) {
                    ScrollTrigger.create({
                        trigger: page,
                        start: "top 70%", 
                        end: "bottom 30%",
                        onEnter: () => {
                            console.log(`▶️ Запуск: ${modelId}`);
                            tl.play();
                        },
                        onLeave: () => tl.pause(),
                        onEnterBack: () => tl.play(),
                        onLeaveBack: () => tl.pause(),
                        markers: false
                    });
                }
            });
        }, 200); //pause so everything will have enough time to load
    });
});

const burger = document.getElementById('burger-menu');
const overlay = document.getElementById('menu-overlay');
const navLinks = document.querySelectorAll('#menu-overlay a');

// Toggle menu open/close
burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    overlay.classList.toggle('menu-hidden');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('open');
        overlay.classList.add('menu-hidden');
    });
});





