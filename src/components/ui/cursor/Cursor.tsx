import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const ring = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px,0)`;
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px,0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll(
      "a,button,.surface-card,input,textarea"
    );

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  if ("ontouchstart" in window) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`cursor-ring ${hover ? "hover" : ""}`}
      />

      <div
        ref={dotRef}
        className={`cursor-dot ${hover ? "hover" : ""}`}
      />
    </>
  );
}