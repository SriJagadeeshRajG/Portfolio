import { motion } from 'framer-motion';
import { useScrollProgress, useReducedMotion } from '@/hooks';

/** Thin copper scroll-progress bar fixed to the top of the viewport. */
export function ScrollProgress() {
  const progress = useScrollProgress();
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-base-line">
        <div className="h-full bg-copper" style={{ width: `${progress * 100}%` }} />
      </div>
    );
  }

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-copper via-copper-hover to-sage"
      style={{ scaleX: progress }}
    />
  );
}
