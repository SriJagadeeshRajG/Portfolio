import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, type SectionId } from '@/data/portfolio';
import { useActiveSection, useReducedMotion } from '@/hooks';

const ids = navItems.map((n) => n.id) as unknown as string[];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (id: SectionId) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        initial={reduced ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-40"
      >
        <div className="container-page pt-3 sm:pt-4">
          <nav
            aria-label="Primary"
            className={`flex items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-4 ${
              scrolled
                ? 'border-base-line-strong bg-base-surface/80 shadow-elevated backdrop-blur-xl'
                : 'border-transparent bg-base-surface/30 backdrop-blur-md'
            }`}
          >
            <button
              onClick={() => handleNav('home')}
              className="group flex items-center gap-2.5 rounded-full px-1.5 py-1"
              aria-label="Go to home"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-copper/40 bg-copper/10 text-copper">
                <span className="font-mono text-sm font-semibold">S</span>
              </span>
              <span className="hidden text-sm font-medium tracking-tightish text-ink sm:block">
                Sri Jagadeesh Raj
              </span>
            </button>

            <ul className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNav(item.id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                        isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full bg-base-raised"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('contact');
                }}
                className="hidden rounded-full bg-copper px-4 py-1.5 text-sm font-medium text-base-bg transition-colors hover:bg-copper-hover sm:block"
              >
                Get in touch
              </a>
              <button
                onClick={() => setOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-base-line text-ink-muted hover:text-ink md:hidden"
                aria-label="Open menu"
                aria-expanded={open}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-base-bg/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={reduced ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={reduced ? undefined : { x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="absolute right-0 top-0 flex h-full w-[min(82vw,360px)] flex-col border-l border-base-line bg-base-surface p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest2 text-ink-faint">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-base-line text-ink-muted hover:text-ink"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={reduced ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <button
                      onClick={() => handleNav(item.id)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-base transition-colors ${
                        active === item.id
                          ? 'bg-base-raised text-ink'
                          : 'text-ink-muted hover:bg-base-raised hover:text-ink'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-ink-faint">
                        0{i + 1}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('contact');
                  }}
                  className="flex w-full items-center justify-center rounded-xl bg-copper px-4 py-3 text-sm font-medium text-base-bg transition-colors hover:bg-copper-hover"
                >
                  Get in touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
