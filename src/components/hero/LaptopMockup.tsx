import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks';

/* ------------------------------------------------------------------ */
/*  Expense Tracker app UI rendered inside the laptop screen.          */
/*  Sized in container-query units (cqw) so it scales with the screen. */
/* ------------------------------------------------------------------ */

const TXNS = [
  { name: 'Swiggy', cat: 'Food', amount: '-₹420', dot: '#B87333' },
  { name: 'Stipend', cat: 'Income', amount: '+₹5,000', dot: '#6E8F85' },
  { name: 'Amazon', cat: 'Shopping', amount: '-₹1,290', dot: '#D89C4A' },
];

const BARS = [42, 58, 36, 70, 52, 88, 64];

function ExpenseTrackerUI() {
  return (
    <div className="flex h-full w-full bg-base-bg text-left">
      {/* Sidebar */}
      <aside
        className="flex flex-col items-center justify-between border-r border-base-line bg-[#171717] py-[2.4cqw]"
        style={{ width: '9cqw' }}
      >
        <div className="flex flex-col items-center gap-[2.2cqw]">
          <span
            className="rounded-md bg-copper"
            style={{ width: '3cqw', height: '3cqw' }}
          />
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="rounded-md bg-ink-faint/30"
              style={{ width: '2.8cqw', height: '2.8cqw' }}
            />
          ))}
        </div>
        <span
          className="rounded-full bg-sage/70"
          style={{ width: '3.2cqw', height: '3.2cqw' }}
        />
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col" style={{ padding: '3cqw', gap: '2.2cqw' }}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <span style={{ fontSize: '2.4cqw' }} className="font-semibold tracking-tightish text-ink">
            Expense Tracker
          </span>
          <span
            className="rounded-full border border-base-line bg-base-surface text-ink-faint"
            style={{ fontSize: '1.5cqw', padding: '0.6cqw 1.4cqw' }}
          >
            Jul 2026
          </span>
        </div>

        {/* Balance card */}
        <div
          className="relative overflow-hidden rounded-xl border border-copper/25"
          style={{
            padding: '2.6cqw',
            background:
              'linear-gradient(135deg, rgba(184,115,51,0.18), rgba(184,115,51,0.04))',
          }}
        >
          <span style={{ fontSize: '1.5cqw' }} className="font-medium text-ink-muted">
            Total Balance
          </span>
          <div className="mt-[0.6cqw] flex items-end justify-between">
            <span style={{ fontSize: '4.6cqw' }} className="font-semibold leading-none tracking-tighter2 text-ink">
              ₹48,250
            </span>
            <span
              className="flex items-center gap-[0.6cqw] rounded-full bg-sage/15 text-sage"
              style={{ fontSize: '1.5cqw', padding: '0.5cqw 1.2cqw' }}
            >
              ↑ 12.4%
            </span>
          </div>
        </div>

        {/* Stat row */}
        <div className="flex" style={{ gap: '2cqw' }}>
          {[
            { label: 'Income', value: '₹62,400', c: 'text-sage' },
            { label: 'Spent', value: '₹14,150', c: 'text-copper' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex-1 rounded-lg border border-base-line bg-base-surface"
              style={{ padding: '1.8cqw' }}
            >
              <span style={{ fontSize: '1.4cqw' }} className="text-ink-faint">
                {s.label}
              </span>
              <div style={{ fontSize: '2.6cqw' }} className={`mt-[0.4cqw] font-semibold ${s.c}`}>
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-lg border border-base-line bg-base-surface" style={{ padding: '1.8cqw' }}>
          <div className="flex items-end" style={{ height: '7cqw', gap: '1.4cqw' }}>
            {BARS.map((h, i) => (
              <div key={i} className="flex flex-1 items-end">
                <motion.span
                  className="w-full rounded-full bg-gradient-to-t from-copper/40 to-copper-hover"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-[1cqw] flex" style={{ gap: '1.4cqw' }}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <span
                key={i}
                className="flex-1 text-center text-ink-faint"
                style={{ fontSize: '1.2cqw' }}
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="flex flex-col" style={{ gap: '1.4cqw' }}>
          {TXNS.map((t) => (
            <div key={t.name} className="flex items-center justify-between">
              <div className="flex items-center" style={{ gap: '1.4cqw' }}>
                <span
                  className="rounded-full"
                  style={{ width: '2.4cqw', height: '2.4cqw', background: t.dot }}
                />
                <div className="flex flex-col">
                  <span style={{ fontSize: '1.6cqw' }} className="font-medium text-ink">
                    {t.name}
                  </span>
                  <span style={{ fontSize: '1.3cqw' }} className="text-ink-faint">
                    {t.cat}
                  </span>
                </div>
              </div>
              <span
                style={{ fontSize: '1.6cqw' }}
                className={t.amount.startsWith('+') ? 'font-semibold text-sage' : 'font-semibold text-ink-muted'}
              >
                {t.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Laptop mockup — floating + mouse parallax + hover lift.            */
/* ------------------------------------------------------------------ */

export function LaptopMockup() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

  // glow drifts opposite for depth
  const gx = useTransform(px, [-0.5, 0.5], [12, -12]);
  const gy = useTransform(py, [-0.5, 0.5], [12, -12]);

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="group relative flex items-center justify-center"
      style={{ perspective: 1400 }}
    >
      {/* Ambient glow */}
      <motion.div
        aria-hidden
        style={{ x: reduced ? 0 : gx, y: reduced ? 0 : gy }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute left-1/2 top-1/2 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[90px] transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: 'radial-gradient(circle, rgba(184,115,51,0.22), transparent 70%)' }}
        />
      </motion.div>

      {/* Hover lift + parallax tilt */}
      <motion.div
        whileHover={reduced ? undefined : { scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        style={{ rotateX: reduced ? 0 : rx, rotateY: reduced ? 0 : ry, transformStyle: 'preserve-3d' }}
      >
        {/* Floating */}
        <motion.div
          animate={reduced ? undefined : { y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative" style={{ width: 'min(86vw, 680px)' }}>
            {/* Screen bezel */}
            <div
              className="relative mx-auto rounded-[14px] border border-white/5 bg-[#0a0a0a] p-[6px] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
              style={{ width: '100%' }}
            >
              {/* Camera notch */}
              <span className="absolute left-1/2 top-[3px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/15" />
              {/* Screen */}
              <div
                className="relative aspect-[16/10] w-full overflow-hidden rounded-[9px] bg-base-bg"
                style={{ containerType: 'inline-size' }}
              >
                <ExpenseTrackerUI />
                {/* subtle screen sheen */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[9px]"
                  style={{
                    background:
                      'linear-gradient(115deg, rgba(244,242,238,0.06) 0%, transparent 35%, transparent 100%)',
                  }}
                />
              </div>
            </div>

            {/* Hinge */}
            <div className="mx-auto h-[5px] w-[102%] -translate-x-[1%] rounded-b-sm bg-gradient-to-b from-[#1c1c1c] to-[#0f0f0f]" />

            {/* Base */}
            <div className="relative mx-auto w-[104%] -translate-x-[2%]">
              <div
                className="relative h-[10px] rounded-b-[10px] bg-gradient-to-b from-[#262626] via-[#1a1a1a] to-[#0c0c0c]"
                style={{ boxShadow: '0 18px 40px -12px rgba(0,0,0,0.85)' }}
              >
                {/* notch */}
                <span className="absolute left-1/2 top-0 h-[3px] w-[14%] -translate-x-1/2 rounded-b-md bg-[#0a0a0a]" />
                {/* base highlight */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[1px] bg-white/5"
                />
              </div>
            </div>

            {/* Ground shadow */}
            <div
              aria-hidden
              className="mx-auto mt-3 h-[14px] w-[60%] rounded-full bg-black/60 blur-xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
