"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const t = setTimeout(() => {
      const main = document.querySelector("main");
      if (!main) return;
      const candidates = main.querySelectorAll(
        "section h2, section h3, .card, .workbench-photo, .bench-split, .hero-chip-stage"
      );
      candidates.forEach((el, i) => {
        if (el.classList.contains("reveal-up") || el.classList.contains("reveal")) return;
        el.classList.add("reveal-up");
        el.style.transitionDelay = ((i % 4) * 60) + "ms";
      });
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      main.querySelectorAll(".reveal-up").forEach((el) => io.observe(el));
      // store for cleanup
      ScrollReveal._io = io;
    }, 30);
    return () => {
      clearTimeout(t);
      if (ScrollReveal._io) { ScrollReveal._io.disconnect(); ScrollReveal._io = null; }
    };
  }, [pathname]);

  return null;
}
