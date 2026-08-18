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

  let sections = gsap.utils.toArray([
    "#author-events",
    "#workshop-events",
    "#family-events",
    "#what-to-expect-content",
    "#be-part-mobile",
    "#be-part",
  ]);

  sections.forEach((section) => {
    gsap.fromTo(
      section,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "powerOut",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
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

  gsap.to(".minster-fan-container", {
    rotate: 12,
    // transformOrigin: "50% 130%",
    ease: "none",
    scrollTrigger: {
      trigger: ".minster-fan-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  gsap.to(".central-library-fan-container", {
    rotate: 16,
    // transformOrigin: "50% 130%",
    ease: "none",
    scrollTrigger: {
      trigger: ".central-library-fan-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  gsap.to(".library-fan-container", {
    rotate: -8,
    // transformOrigin: "50% 130%",
    ease: "none",
    scrollTrigger: {
      trigger: ".library-fan-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  gsap.to(".hero-right-fan-container", {
    rotate: 12,
    // transformOrigin: "50% 130%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-right-fan-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  gsap.to(".hero-left-fan-container", {
    rotate: -8,
    // transformOrigin: "50% 130%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-left-fan-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  // --------------------------------------------------
  // HERO
  // --------------------------------------------------

  const buildings = gsap.utils.toArray(".building");
  const rays = gsap.utils.toArray(".hero-ray-line");
  const shadows = gsap.utils.toArray(".building-shadow");
  const heroRayContainer = document.querySelector(".hero-main-fan-container");
  const sbfImage = document.querySelector(".sbf-image");
  const dateDiv = document.querySelector(".date-div");
  const heroCopy = document.querySelector(".hero-copy");

  const rightRay = document.querySelector(".dt-right-fan");

  const intro = gsap.timeline();

  gsap.set(dateDiv, { y: 100, scale: 0.9 });
  gsap.set(heroCopy, { y: 100, scale: 0.9 });

  intro.addLabel("title", 0);

  intro.to(
    sbfImage,
    {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    },
    "title"
  );

  intro.to(
    dateDiv,
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "title"
  );

  intro.to(
    heroCopy,
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "title+=0.10"
  );

  intro.to(
    rightRay,
    {
      opacity: 1,
      duration: 2.0,
      ease: "power2.out",
    },
    "title+=0.10"
  );

  // --------------------------------------------------
  // Rays + fan container spin — happens FIRST
  // --------------------------------------------------

  intro.addLabel("rays", 0);

  intro.to(
    rays,
    {
      height: 3000,
      duration: 1.4,
      ease: "power2.out",
      stagger: {
        each: 0.01,
        from: "edges", // or "start" / "edges", whichever suits the fan shape
      },
    },
    "rays"
  );

  // --------------------------------------------------
  // Buildings Initial positions — lying flat, hinged at base
  // --------------------------------------------------

  gsap.set(buildings, {
    transformOrigin: "50% 100%",
    transformStyle: "preserve-3d",
    rotateX: 90,
    opacity:1,
  });

  gsap.set(shadows, {
    opacity: 0,
    scaleX: 0.6,
    transformOrigin: "50% 50%",
  });

  // per-building starting offsets + fixed imperfection rotation
  // (depth order: 0 & 3 = background, 1 & 2 = foreground — tweak to your scene)
  const config = [
    { x: -40, scale: 0.9, rotateZ: -1.5, depth: "front" }, // Bentilee
    { x: 40, scale: 0.9, rotateZ: 2, depth: "back" }, // Stoke Minster
    { x: 20, scale: 0.95, rotateZ: -1, depth: "back" }, // Stoke Library
    { x: -20, scale: 0.95, rotateZ: 1.2, depth: "front" }, // City Central
  ];

  buildings.forEach((el, i) => {
    gsap.set(el, {
      x: config[i].x,
      scale: config[i].scale,
    });
  });

  // --------------------------------------------------
  // Stand-up animation
  // --------------------------------------------------

  const duration = 1.1;
  const ease = "back.out(1.7)";

  // background pieces rise first/slower, foreground pieces rise later/snappier
  const timingByDepth = {
    back: { at: 0, duration: duration * 1.1 },
    front: { at: 0.28, duration: duration * 0.9 },
  };

  buildings.forEach((el, i) => {
    const cfg = config[i];
    const timing = timingByDepth[cfg.depth];
    const at = timing.at + i * 0.14; // stagger within each depth group
    const dur = timing.duration;

    const tl = gsap.timeline();

    // stand up
    tl.to(el, {
      // opacity: 1,
      rotateX: 0,
      x: 0,
      scale: cfg.scale,
      rotateZ: cfg.rotateZ,
      duration: dur,
      ease,
    });

    // shadow grows in alongside
    tl.to(
      shadows[i],
      {
        opacity: 0.35,
        scaleX: 1,
        duration: dur,
        ease,
      },
      0
    );

    intro.add(tl, at);
  });

  // --------------------------------------------------
  // Idle sway once everything has settled
  // --------------------------------------------------

  intro.eventCallback("onComplete", () => {
    buildings.forEach((el, i) => {
      gsap.to(el, {
        rotateZ: `+=${i % 2 === 0 ? 0.6 : -0.6}`,
        duration: 3 + i * 0.4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });
  });
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
