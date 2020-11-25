const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
tl.to(".introslider", { y: "-100%", duration: 1.6, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");