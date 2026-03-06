export function initBucketElevator() {

    const tl = gsap.timeline({
        paused: true,
        repeat: -1,
        yoyo: true,
        repeatDelay: 1
    });

    const travelTime = 5;
    const buckets = gsap.utils.toArray(".bucket");


    buckets.forEach((bucket, index) => {
        
        gsap.set(bucket, { rotation: 0 });

        let bucketTween = tl.to(bucket, {
            duration: 50,             // time of one circle
            repeat: -1,              
            ease: "none",            
            motionPath: {
                path: "#conveyor-belt",  // ID of line they will slide on
                align: "#conveyor-belt", // connect buckets with line
                alignOrigin: [1, 1], 
                autoRotate: 120        
            }
        }, 0);

       
    // Make every bucket start a little bit later
    const allTweens = tl.getChildren();
    const lastTween = allTweens[allTweens.length - 1];
    
    
    lastTween.startTime(-index * (50 / buckets.length));
    });

    const grains = gsap.utils.toArray("#grain path");

    gsap.set(".grain", { 
        strokeDasharray: "36.482, 29.186" 
    });

    const bottomGrains = ["#grain1", "#grain2", "#grain3"];
    
    tl.to(bottomGrains, {
        strokeDashoffset: -65.668, 
        duration: 0.5,   
        ease: "none",    
        repeat: -1       
    }, 0);

    
    const topGrains = ["#grain4", "#grain5", "#grain6"];
    
    tl.to(topGrains, {
        strokeDashoffset: -65.668, 
        duration: 0.5,   
        ease: "none",    
        repeat: -1       
    }, 0);

    tl.to("#chain", {
        strokeDashoffset: 65.668, 
    
        duration: 0.5,   
        ease: "none",    
        repeat: -1      
    }, 0);

    
    tl.to("#pulley-top", {
        rotation: 360,               
        svgOrigin: "985.4 422.9",    
        duration: 4,                 
        ease: "none",                
        repeat: -1                   
    }, 0);

    
    tl.to("#pulley-bottom", {
        rotation: 360,
        svgOrigin: "1010.2 2534.3",  
        duration: 4,                 
        ease: "none",
        repeat: -1
    }, 0);

    return tl;
}