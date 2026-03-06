export function initFreightElevator() {

   

    const tl = gsap.timeline({
        paused: true,
        repeat: -1,
        yoyo: true,
        repeatDelay: 1
    });

    const travelTime = 5;

    const elevatorBox = [
        "#cabin-box-left", 
        "#cabin-box-right",
        "#cable-foundation"
    ];

    
    tl.to(elevatorBox, {
        y: -4450,              
        duration: travelTime,           
        ease: "power2.inOut",  
    }, 0);

    const elevatorCabels = [
        "#cable-right", 
        "#cable-left"
    ];

        
    tl.to(elevatorCabels, {
        scaleY: 0,           
        transformOrigin: "top", 
        opacity: 0,
        duration: 4.5,           
        ease: "power2.inOut",  
    }, 0);

    tl.to("#main-cable", {
        scaleY: 0.03,           
        transformOrigin: "top", 
        duration: travelTime,           
        ease: "power2.inOut",  
    }, 0);

    return tl;
}