export function initUnloadingBarley() {

    const tl = gsap.timeline({paused: true, repeat: -1 });

    
    const grainPiles = [
        "#grain-pile1", 
        "#grain-pile2", 
        "#grain-pile3", 
        "#grain-pile4",
        "#grain-pile5",
        "#grain-pile6",
        "#grain-pile7"
    ];

    
    gsap.set(grainPiles, { 
        transformOrigin: "50% 100%" 
    });

    
    tl.fromTo(grainPiles, 
        
        { 
            scaleY: 0,
            opacity: 0
        }, 
        
        { 
            scaleY: 1,
            opacity: 1,
            duration: 5,         
            ease: "power2.out",  
            
            
            stagger: 1,          
            
            repeat: -1,          
            repeatDelay: 2       
        }, 0
    );

    
    tl.fromTo("#unloading-grain2", 
        { scaleY: 1 }, 
        { 
            scaleY: 0.1, 
            duration: 12,             
            ease: "none", 
            
            transformOrigin: "50% 100%", 
            repeat: -1,               
            repeatDelay: 1            
        }, 0
    );



    
    
    if (document.querySelector("#grain-stream")) {
        tl.to("#grain-stream", {
            strokeDashoffset: -24, 
            duration: 0.2,
            ease: "none",
            repeat: -1
        }, 0);
    }

    return tl;

}