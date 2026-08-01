import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks';

const LINES = [
  'import { Portfolio } from "@sri-jagadeesh/core";',
  'compiling experience...',
  'rendering details → done',
];

/** Full-screen page loader with a typed terminal feel. */
export function PageLoader() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);
  const [typed, setTyped] = useState<string[]>([]);

  useEffect(() => {
    if (reduced) {
      setDone(true);
      return;
    }
    let cancelled = false;
    const run = async () => {
      const acc: string[] = [];
      for (let i = 0; i < LINES.length; i++) {
        const line = LINES[i];
        for (let j = 1; j <= line.length; j++) {
          if (cancelled) return;
          acc[i] = line.slice(0, j);
          setTyped([...acc]);
          await new Promise((r) => setTimeout(r, 12));
        }
        await new Promise((r) => setTimeout(r, 160));
      }
      await new Promise((r) => setTimeout(r, 320));
      if (!cancelled) setDone(true);
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base-bg"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          <div className="absolute inset-0 bg-noise opacity-[0.03]" />
          <div className="w-[min(86vw,460px)]">
            <div className="surface-card overflow-hidden p-0 shadow-elevated">
              <div className="flex items-center gap-2 border-b border-base-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
                <span className="ml-2 font-mono text-xs text-ink-faint">portfolio — zsh</span>
              </div>
              <div className="space-y-1.5 px-4 py-4 font-mono text-xs leading-relaxed sm:text-[13px]">
                {typed.map((line, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="select-none text-sage">{'>'}</span>
                    <span className="text-ink-muted">{line}</span>
                    {i === typed.length - 1 && <span className="animate-blink text-copper">▋</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
