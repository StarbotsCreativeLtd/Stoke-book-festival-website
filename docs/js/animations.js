document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  ScrollToPlugin.config({ autoKill: true });

  function scrollToDiv(div) {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: div,
        offsetY: 50,
      },
      ease: "power2.out",
    });
  }

  document.querySelectorAll(".scroll-to-section").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = link.getAttribute("href");
      scrollToDiv(target);
    });
  });

  gsap.to(".footer-fan-container", {
    rotate: 40,
    transformOrigin: "50% 130%",
    ease: "none",
    scrollTrigger: {
      trigger: ".footer-fan-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  gsap.to(".right-card-fan-container", {
    rotate: -10,
    // transformOrigin: "50% 130%",
    ease: "none",
    scrollTrigger: {
      trigger: ".right-card-fan-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  gsap.to(".left-card-fan-container", {
    rotate: 5,
    // transformOrigin: "50% 130%",
    ease: "none",
    scrollTrigger: {
      trigger: ".left-card-fan-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
