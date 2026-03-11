document.addEventListener("DOMContentLoaded", () => {
  if (window.gsap) {
    gsap.from(".hero-logo", {
      x: 280,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });

    gsap.from(".hero-actions .btn", {
      y: 28,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      delay: 0.35,
      ease: "power2.out"
    });

    gsap.utils.toArray(".card, .about-box, .contact-box, .legal-box, .cta-box").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 88%"
        },
        y: 46,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  }
});