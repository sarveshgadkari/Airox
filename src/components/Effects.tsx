"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "./icons";

/* Mounts once: scroll-reveal animations, count-up stats, back-to-top button. */
export default function Effects() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            reveal.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      let start: number | null = null;
      const dur = 1700;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target).toLocaleString("en-IN");
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString("en-IN");
      };
      requestAnimationFrame(step);
    };
    const stats = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(e.target as HTMLElement);
            stats.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => stats.observe(el));

    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      reveal.disconnect();
      stats.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      className={`toTop${showTop ? " show" : ""}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp />
    </button>
  );
}
