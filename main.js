(() => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  let tl = gsap.timeline();

  tl.to(".yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });

  tl.from(
    ".yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    ".loader h1",
    {
      color: "black",
    },
    "anim"
  );

  tl.to(".loader", { opacity: 0 });
})();
