let body = document.body;
let ham=document.querySelector(" #ham");
let menu=document.querySelector(".menu");
ham.addEventListener("click",()=>{
    console.log("chjing");
    menu.classList.toggle("menutoggle");
})
gsap.registerPlugin(ScrollTrigger);
gsap.from("nav", {
  //   scrollTrigger: { trigger: "this", toggleActions: "restart none none none" },
  y: -100,
  ease: "easein",
  duration: 1,
  backgroundColor: "hsl(0, 0%, 75%)",
});
gsap.from(".working img ", {
  x: "100%",
  duration: 1.5,
  ease: "bounce",
});
gsap.from(".shorten-it", {
  scrollTrigger: { trigger: "this", toggleActions: "play none play none" },
  x: "-100vw",
  ease: "easein",
  duration: 0.5,
});
if (window.innerWidth <= 768) {
  gsap.from("#card1", {
    scrollTrigger: {
      trigger: "#card1",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
    x: "-100vw",
    duration: 1,
    ease: "bounce",
  });
  gsap.from("#card2", {
    scrollTrigger: {
      trigger: "#card2",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
    x: "-100vw",
    duration: 1,
    ease: "bounce",
  });
  gsap.from("#card3", {
    scrollTrigger: {
      trigger: "#card3",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
    x: "-100vw",
    duration: 1,
    ease: "bounce",
  });
}
else{
    gsap.from("#card1", {
        scrollTrigger: { trigger: "#card1",start:"top center",end:"bottom center", toggleActions: "play none none none" },
        opacity:0,
        duration: 2,
        // ease:"bounce"
    });
    gsap.from("#card2", {
        scrollTrigger: { trigger: "#card2",start:"top center",end:"bottom center", toggleActions: "play none none none" },
        opacity:0,
        duration: 2,
        // ease:"bounce"
    });
    gsap.from("#card3", {
        scrollTrigger: { trigger: "#card3",start:"top center",end:"bottom center", toggleActions: "play none none none" },
        opacity:0,
        duration: 2,
        // ease:"bounce"
    });
    
}
gsap.from("#get-started", { scrollTrigger: "this", opacity: 0, duration: 1 });
gsap.from(".icons img", {
  scrollTrigger: ".icons img",
  y: "-100%",
  opacity: 0.2,
  duration: 1,
});
