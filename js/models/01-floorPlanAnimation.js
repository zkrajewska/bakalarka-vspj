export function initFloorPlan() {
    const tl = gsap.timeline();

    const GrainForCleaner = document.querySelectorAll(".grain-for-cleaner");

    gsap.set(GrainForCleaner, { strokeDasharray: "12.112, 9.69" });

    gsap.to(GrainForCleaner  , {
        strokeDashoffset: -21.802,
        duration: 1,
        ease: "none", 
        repeat: -1
    });

    const piles = document.querySelectorAll("#grain-mounds-container > g");

    tl.fromTo(piles,
        {scaleX: 0, scaleY: 0, transformOrigin: "50% 100%" },
        {scaleX: 1, scaleY: 1, duration: 10, stagger: 5, ease: "steps.out", repeat: -1 }, "<"
    );

    const wheel = document.querySelectorAll(".wheel-part");

    gsap.to(wheel,
        {rotation: 360, ease: "none",duration: 10, repeat: -1, transformOrigin: "center"}
    );

    gsap.to(flames, 
        {scaleY: 1.1, scaleX: 0.8, transformOrigin: "50% 100%", duration: 0.4, repeat: -1, yoyo: "true", ease: "rough"}
    );

    const elevator = document.querySelectorAll("#freight-elevator1 > g");

    const liftTl = gsap.timeline({ repeat: -1, yoyo: true });

    liftTl.to("#freight-elevator",
        { y: "100%", duration: 8, ease: "none"}
    );
    liftTl.to("#freight-elevator", { duration: 5, autoAlpha: 0, delay: 2}, "<" );
}
