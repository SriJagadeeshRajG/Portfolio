import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks";

export function Background() {
  const reduced = useReducedMotion();

  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-base-bg" />
      {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
  style={{
    backgroundImage: "url('/backgrounds/hero-bg.webp')",
  }}
/>

      {/* ================= HERO AMBIENT LIGHT ================= */}
      <motion.div
        animate={
          reduced
            ? {}
            : {
                scale: [1, 1.08, 1],
                opacity: [0.65, 0.8, 0.65],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[-18%] h-[950px] w-[950px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(209,138,59,.14) 0%, rgba(209,138,59,.07) 35%, transparent 72%)",
          filter: "blur(120px)",
        }}
      />

      {/* ================= MOUSE GLOW ================= */}
      <motion.div
        animate={{
          left: mouse.x - 325,
          top: mouse.y - 325,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 120,
          mass: 0.6,
        }}
        className="absolute h-[650px] w-[650px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(209,138,59,.05) 0%, rgba(209,138,59,.05) 25%, rgba(209,138,59,.05) 45%, transparent 72%)",
          filter: "blur(100px)",
        }}
      />

      {/* ================= LEFT COPPER ================= */}
      <motion.div
        animate={
          reduced
            ? {}
            : {
                x: [0, 80, 0],
                y: [0, -40, 0],
                scale: [1, 1.12, 1],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[18%] -left-[10%] h-[70vh] w-[70vh] rounded-full opacity-75"
        style={{
          background:
            "radial-gradient(circle, rgba(184,115,51,.20), transparent 72%)",
          filter: "blur(90px)",
        }}
      />

      {/* ================= RIGHT SAGE ================= */}
      <motion.div
        animate={
          reduced
            ? {}
            : {
                x: [0, -60, 0],
                y: [0, 60, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[25%] -right-[12%] h-[60vh] w-[60vh] rounded-full opacity-55"
        style={{
          background:
            "radial-gradient(circle, rgba(110,143,133,.18), transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* ================= BOTTOM COPPER ================= */}
      <motion.div
        animate={
          reduced
            ? {}
            : {
                x: [0, 40, 0],
                y: [0, -60, 0],
                scale: [1, 1.15, 1],
              }
        }
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[18%] h-[55vh] w-[55vh] rounded-full opacity-45"
        style={{
          background:
            "radial-gradient(circle, rgba(184,115,51,.14), transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* ================= GRID ================= */}
      <div
        className={`absolute inset-0 bg-grid opacity-[0.20] ${
          reduced ? "" : "animate-grid-drift"
        }`}
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black 35%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black 35%, transparent 90%)",
        }}
      />

      {/* ================= NOISE ================= */}
      <div className="absolute inset-0 bg-noise opacity-[0.025] mix-blend-soft-light" />

      {/* ================= VIGNETTE ================= */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,.72) 100%)",
        }}
      />
    </div>
  );
}