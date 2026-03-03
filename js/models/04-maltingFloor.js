export function initMaltingFloor() {

        const tl = gsap.timeline();

    const GrainForCleaner = document.querySelectorAll(".grain-for-cleaner1");

    gsap.set(GrainForCleaner, { strokeDasharray: "12.112, 9.69" });

    gsap.to(GrainForCleaner  , {
        strokeDashoffset: -21.802,
        duration: 1,
        ease: "none", 
        repeat: -1
    });

    

    const wheel = document.querySelectorAll(".wheel-part");

    gsap.to(wheel,
        {rotation: 360, ease: "none",duration: 10, repeat: -1, transformOrigin: "center"}
    );

    gsap.to(flames, 
        {scaleY: 1.1, scaleX: 0.8, transformOrigin: "50% 100%", duration: 0.4, repeat: -1, yoyo: "true", ease: "rough"}
    );

    const cartPile = [ "#cart-pile1", "#cart-pile2" ];
    const elevator = document.querySelectorAll("#freight-elevator > g");
    const cart = document.querySelectorAll("#transport-cart");
    const elevatorCargo = [ "#pile-left", "#pile-right" ]; 
    const piles = document.querySelectorAll("#grain-mounds-container > g");
    gsap.set(piles, {scale: 0, transformOrigin: "50% 100%"});
 

    const liftTl = gsap.timeline({ repeat: -1, ease: "none"});

    liftTl.to(piles,
        {scaleX: 1, scaleY: 1, duration: 5, stagger: 2, ease: "sine.out" }, "0"
    ); 

    liftTl.fromTo(cartPile,
        {scaleX: 0, scaleY: 0, transformOrigin: "50% 100%" },
        {scaleX: 1, scaleY: 1, duration: 2, stagger: 0.5 }, "-=3"
    );

    liftTl.to(cart,
        { x: +550, duration: 3 }
    );

    liftTl.to(cartPile,
        { scale: 0, duration: 2, ease: "none", transformOrigin: "50% 100%" }
    );

    liftTl.fromTo(elevatorCargo,
        {scaleX: 0, scaleY: 0, transformOrigin: "50% 100%" },
        {scaleX: 1, scaleY: 1, duration: 1, stagger: 0.5 }
    );

    liftTl.to("#freight-elevator",
        { y: "100%", duration: 8}
    );
    liftTl.to("#freight-elevator", { duration: 5, autoAlpha: 0, yoyo: true}, "<" );


    liftTl.set(cart,
        {  scaleX: -1, duration: 0.5, transformOrigin: "50% 50%"}
    );

    liftTl.to(cart,
        { x: 0, duration: 3 }
    );

    liftTl.set(cart,
        {  scaleX: -1, duration: 0.5 }
    );
}
