import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const ASSETS_TO_PRELOAD = [
  '/010.jpeg',
  '/4.jpeg',
  '/1.jpeg',
  '/2.jpeg',
  '/3.jpeg',
  '/5.jpeg',
  '/1.jpg',
  '/2.jpg',
  '/3.11.jpg',
  '/3.12.jpg',
  '/2.1.jpg',
  '/0.png',
];

const PHRASES = [
  'Preparing Memories...',
  'Gathering Sacred Blessings...',
  'Weaving Moments of Love...',
  'Readying Your Experience...',
];

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Cycle inspiring phrases
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 1200);
    return () => clearInterval(phraseInterval);
  }, []);

  // Preload all assets with progress tracking
  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;
    const total = ASSETS_TO_PRELOAD.length;

    const handleItemLoaded = () => {
      if (!mounted) return;
      loadedCount++;
      const currentPct = Math.min(100, Math.round((loadedCount / total) * 100));
      setProgress(currentPct);

      if (loadedCount >= total) {
        setTimeout(() => {
          if (mounted) onComplete();
        }, 500);
      }
    };

    // Preload all images in parallel
    ASSETS_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;

      if (img.complete) {
        handleItemLoaded();
      } else {
        img.onload = () => {
          if ('decode' in img) {
            img.decode().then(handleItemLoaded).catch(handleItemLoaded);
          } else {
            handleItemLoaded();
          }
        };
        img.onerror = handleItemLoaded;
      }
    });

    // Failsafe timeout: never block for more than 4.5 seconds
    const safetyTimer = setTimeout(() => {
      if (mounted) {
        setProgress(100);
        setTimeout(() => {
          if (mounted) onComplete();
        }, 300);
      }
    }, 4500);

    return () => {
      mounted = false;
      clearTimeout(safetyTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[99999] bg-[#240306] flex flex-col items-center justify-center text-center px-6 overflow-hidden select-none touch-none"
    >
      {/* Ambient Radial Golden Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.18) 0%, rgba(36, 3, 6, 0) 65%)',
        }}
      />

      {/* Decorative Traditional Corner Motifs */}
      <div className="absolute top-8 left-8 opacity-20 text-[#FFD700] text-xl pointer-events-none">
        ❖
      </div>
      <div className="absolute top-8 right-8 opacity-20 text-[#FFD700] text-xl pointer-events-none">
        ❖
      </div>
      <div className="absolute bottom-8 left-8 opacity-20 text-[#FFD700] text-xl pointer-events-none">
        ❖
      </div>
      <div className="absolute bottom-8 right-8 opacity-20 text-[#FFD700] text-xl pointer-events-none">
        ❖
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full">
        {/* Animated Sacred Diya Motif */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 sm:w-20 sm:h-20 mb-6 drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#FFD700] fill-current">
            <path
              d="M50 12 C54 22 64 32 64 47 C64 62 58 72 50 72 C42 72 36 62 36 47 C36 32 46 22 50 12 Z"
              fill="#FFA500"
            />
            <path
              d="M50 20 C52 27 58 35 58 45 C58 55 54 62 50 62 C46 62 42 55 42 45 C42 35 48 27 50 20 Z"
              fill="#FFD700"
              className="animate-pulse"
            />
            <path
              d="M15 65 C15 65 30 85 50 85 C70 85 85 65 85 65 C85 65 70 75 50 75 C30 75 15 65 15 65 Z"
              fill="#800000"
              stroke="#FFD700"
              strokeWidth="2.5"
            />
          </svg>
        </motion.div>

        {/* Monogram / Header */}
        <div className="text-[11px] sm:text-xs text-[#FFD700] uppercase tracking-[0.35em] font-serif font-bold mb-1 drop-shadow-sm">
          Prasanna Priya & Kiran
        </div>
        <div className="text-[9px] text-[#FFD700]/60 uppercase tracking-[0.25em] font-serif mb-6">
          Subha Vivaham
        </div>

        {/* Changing Inspiring Words */}
        <div className="h-7 flex items-center justify-center mb-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="text-[#FFFDF8] font-serif italic text-sm sm:text-base tracking-wider"
            >
              {PHRASES[phraseIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Minimalist Glowing Gold Progress Bar */}
        <div className="w-48 sm:w-56 h-1 rounded-full bg-white/10 overflow-hidden p-[1px] border border-[#FFD700]/30 shadow-[0_0_15px_rgba(255,215,0,0.15)] mb-3">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFE57F] to-[#FFD700] shadow-[0_0_8px_#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="text-[10px] sm:text-[11px] text-[#FFD700]/80 font-serif tracking-widest font-bold">
          {progress}%
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;

