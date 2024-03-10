(() => {
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

  tl.to(".loader", { opacity: 0, display: "none" });
})();

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

document
  .querySelector(".back-to-top")
  .addEventListener("click", () => scroll.scrollTo(0));

document.querySelectorAll(".main-text").forEach((elem) => {
  elem.addEventListener("mouseenter", (e) => {
    const container = e.target.querySelector("h2").innerText;
    switch (container) {
      case "MINIRAL":
        document.querySelector(".page-2").style.backgroundImage =
          "url('https://works.studio/assets/imager/images/skky-partners/37986/skky-25_1a58980f77ae6d8c6a1e26c40e92a05d.jpg')";
        break;
      case "CONVERSE":
        document.querySelector(".page-2").style.backgroundImage =
          "url('https://works.studio/assets/imager/images/us-soccer/38414/USS-1_240208_001956_1a58980f77ae6d8c6a1e26c40e92a05d.jpg')";

        break;
      case "SKKY":
        document.querySelector(".page-2").style.backgroundImage =
          "url('https://works.studio/assets/imager/images/boldly/37287/BOLDLY-1_1a58980f77ae6d8c6a1e26c40e92a05d.jpg')";

        break;
      case "BOLDLY":
        document.querySelector(".page-2").style.backgroundImage =
          "url('https://works.studio/assets/imager/images/converse-global-fa23/37951/converse-21_1a58980f77ae6d8c6a1e26c40e92a05d.jpg')";

        break;
      case "U.S. SOCCER":
        document.querySelector(".page-2").style.backgroundImage =
          "url('https://works.studio/assets/imager/images/mineral-health/38349/MIN-1_240208_000417_1a58980f77ae6d8c6a1e26c40e92a05d.jpg')";

        break;
    }
  });
});

document.querySelectorAll(".main-text").forEach((elem) => {
  elem.addEventListener("mouseleave", () => {
    document.querySelector(".page-2").style.backgroundImage = "";
  });
});

document.querySelector(".collapse").addEventListener("click", (e) => {
  const isOpen = document.querySelector(".collapse").classList.contains("open");
  if (isOpen) {
    document.querySelector(".collapse").classList.remove("open");
    document.querySelector(".collapse").style.transform = "rotate(45deg)";
    document.querySelectorAll(".menu-options li").forEach((elem, index) => {
      if (index !== 0) {
        elem.style.width = "0";
      }
    });
    document.querySelector(".nav ul").style.gap = "0";
  } else {
    document.querySelector(".collapse").classList.add("open");
    document.querySelector(".collapse").style.transform = "rotate(-45deg)";
    document.querySelectorAll(".menu-options li").forEach((elem, index) => {
      if (index !== 0) {
        elem.style.width = "";
      }
    });
    document.querySelector(".nav ul").style.gap = "5vw";
  }
});
