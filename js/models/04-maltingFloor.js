export function initMaltingFloor() {

    const tl = gsap.timeline({ paused: true, repeat: -1});
    
    const GrainForCleaner = document.querySelectorAll(".grain-for-cleaner1");
    const wheel = document.querySelectorAll(".wheel-part");
    const cartPile = [ "#cart-pile1", "#cart-pile2" ];
    const elevator = document.querySelectorAll("#freight-elevator > g");
    const cart = document.querySelectorAll("#transport-cart");
    const elevatorCargo = [ "#pile-left", "#pile-right" ]; 
    const piles = document.querySelectorAll("#grain-mounds-container > g");
    
    gsap.set(piles, {scale: 0, transformOrigin: "50% 100%"});
    gsap.set(cartPile, {scale: 0, transformOrigin: "50% 100%"});
    gsap.set(GrainForCleaner, { strokeDasharray: "12.112, 9.69" });
    
    tl.to(piles,
        {scaleX: 1, scaleY: 1, duration: 8 }, 0
    ); 

    tl.to(cartPile,
        {scaleX: 1, scaleY: 1, duration: 2, stagger: 0.5 }, 2
    );

    tl.to(cart,
        { x: +550, duration: 3 }
    );

    tl.to(cartPile,
        { scale: 0, duration: 2, ease: "none", transformOrigin: "50% 100%" }
    );

    tl.fromTo(elevatorCargo,
        {scaleX: 0, scaleY: 0, transformOrigin: "50% 100%" },
        {scaleX: 1, scaleY: 1, duration: 1, stagger: 0.5 }
    );

    tl.to("#freight-elevator",
        { y: "100%", duration: 8}
    );
    tl.to("#freight-elevator", { duration: 5, autoAlpha: 0, yoyo: true}, "<" );


    tl.set(cart,
        {  scaleX: -1, duration: 0.5, transformOrigin: "50% 50%"}
    );

    tl.to(cart,
        { x: 0, duration: 3 }
    );

    tl.set(cart,
        {  scaleX: -1, duration: 0.5 }
    );

    // total duration of the sequence (finite)
    const d = tl.duration(); 
    
    tl.to(GrainForCleaner  , {
        strokeDashoffset: -21.802 * 40,
        duration: d,
        ease: "none"}, 0 
    );
    

    tl.to(wheel,
        {rotation: 360 * 4, ease: "none", duration: d, transformOrigin: "center"}, 0
    );

    const pulse = 0.8;
    const repeats = Math.max(0, Math.ceil(d / pulse) - 1); 
    tl.to(flames, 
        {scaleY: 1.1, scaleX: 0.8, transformOrigin: "50% 100%", duration: pulse, repeat: repeats, yoyo: true, ease: "sine.inOut"}, 0
    );


    return tl;
}
