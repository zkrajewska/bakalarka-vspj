gsap.registerPlugin(MotionPathPlugin);

export function initLoadingBarley() {
    const tl = gsap.timeline({  paused: true });

    
    const grainPaths = gsap.utils.toArray([
        "#falling-grain1 path",
        "#falling-grain2 path",
        "#falling-grain3 path"
    ]);

    
    tl.to(grainPaths, {
        strokeDashoffset: -16.52, 
        duration: 0.6,            
        ease: "none",             
        repeat: -1                
    }, 0);

    
    const scoops = gsap.utils.toArray(".scoop");

    
    scoops.forEach((scoop, index) => {
        
        let scooptl = gsap.timeline({
            repeat: -1,                
            defaults: { ease: "none" } 
        });

        
        gsap.set(scoop, { 
            opacity: 0, 
            transformOrigin: "50% 50%" 
        });

        const totalDuration = 12; 

        
        scooptl.to(scoop, {
            duration: totalDuration,
            motionPath: {
                path: "#scoop-motionpath",
                align: "#scoop-motionpath",
                alignOrigin: [0.5, 0.5]
            }
        }, 0); 

        
        scooptl.to(scoop, { opacity: 1, duration: 0.8 }, 0)                    
        scooptl.to(scoop, { opacity: 0, duration: 0.8 }, totalDuration - 0.8); 

        tl.add(scooptl.delay(-index * (totalDuration / scoops.length)), 0);
        });

        return tl;
}