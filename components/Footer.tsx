import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-transparent">
      {/* Decorative Traditional Wedding Image */}
      <div className="pt-2 pb-3 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <img
            src="/0.png"
            alt="Traditional Wedding Footer"
            className="w-full h-auto max-w-xl mix-blend-multiply opacity-80"
          />
        </div>
      </div>

      {/* Differentiated Regal Deep Velvet Maroon & Gold Luxury Footer */}
      <div className="relative border-t-2 border-[#FFD700]/40 bg-gradient-to-b from-[#35060A] via-[#240306] to-[#180204] text-[#FFFDF8] shadow-[0_-12px_35px_rgba(40,4,8,0.35)]">

        {/* Ambient Warm Golden Glow in Center */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(255, 215, 0, 0.22) 0%, rgba(24, 2, 4, 0) 70%)'
          }}
        />

        {/* Delicate Top Gold Flourish Crest */}
        <div className="flex items-center justify-center gap-2 pt-3 pb-1">
          <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent via-[#FFD700]/60 to-transparent"></div>
          <span className="text-[#FFD700] text-[11px] drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]">❖</span>
          <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent via-[#FFD700]/60 to-transparent"></div>
        </div>

        {/* Snug & Compact Main Container with Tight Bottom Padding */}
        <div className="max-w-lg mx-auto px-4 sm:px-6 pt-3 pb-6 sm:pb-7 flex flex-col items-center text-center relative z-10">

          {/* Section 1: Brand Collaboration Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            className="flex flex-col items-center mb-3 w-full"
          >
            <motion.div
              custom={0.05}
              variants={fadeUp}
              className="flex items-center gap-2 mb-3.5"
            >
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#FFD700]/40"></span>
              <span className="text-[9px] sm:text-[10px] text-[#FFD700]/90 font-serif tracking-[0.34em] uppercase font-bold drop-shadow-sm">
                Designed & Crafted by
              </span>
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#FFD700]/40"></span>
            </motion.div>

            {/* Dual Logos with Floating Flanking Action Icons */}
            <motion.div
              custom={0.15}
              variants={fadeUp}
              className="flex items-center justify-center gap-2 sm:gap-4 mb-2 w-full"
            >
              {/* === LEFT BRAND: Uthsav Invites with Floating Left Icons === */}
              <div className="flex items-center gap-2 sm:gap-2.5">

                {/* Floating Action Icons (Left Column) */}
                <div className="flex flex-col items-center gap-2">
                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/917386376302?text=Hi%20Uthsav%20Invites%2C%20I%20love%20your%20wedding%20invitation%20designs."
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Uthsav Invites WhatsApp"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                    whileHover={{ scale: 1.18, boxShadow: '0 0 12px rgba(255,215,0,0.6)' }}
                    whileTap={{ scale: 0.92 }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#800000]/70 hover:bg-[#FFD700] border border-[#FFD700]/50 text-[#FFD700] hover:text-[#38060A] flex items-center justify-center shadow-md backdrop-blur-xs transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </motion.a>

                  {/* Website */}
                  <motion.a
                    href="https://uthsavinvites.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Uthsav Invites Website"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                    whileHover={{ scale: 1.18, boxShadow: '0 0 12px rgba(255,215,0,0.6)' }}
                    whileTap={{ scale: 0.92 }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#800000]/70 hover:bg-[#FFD700] border border-[#FFD700]/50 text-[#FFD700] hover:text-[#38060A] flex items-center justify-center shadow-md backdrop-blur-xs transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href="https://www.instagram.com/uthsav_invites"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Uthsav Invites Instagram"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                    whileHover={{ scale: 1.18, boxShadow: '0 0 12px rgba(255,215,0,0.6)' }}
                    whileTap={{ scale: 0.92 }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#800000]/70 hover:bg-[#FFD700] border border-[#FFD700]/50 text-[#FFD700] hover:text-[#38060A] flex items-center justify-center shadow-md backdrop-blur-xs transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </motion.a>
                </div>

                {/* Uthsav Invites Circular Logo (1.jpg) */}
                <div className="flex flex-col items-center">
                  <div
                    className="relative group p-[2px] rounded-full bg-gradient-to-tr from-[#FFD700] via-[#FFE57F] to-[#B8860B] shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_28px_rgba(255,215,0,0.55)] transition-all duration-300 hover:scale-105"
                    title="Uthsav Invites"
                  >
                    <div className="w-[66px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full overflow-hidden bg-[#240306] border border-[#FFD700]/60 flex items-center justify-center">
                      <img
                        src="/uthsav.png"
                        alt="Uthsav Invites"
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-[#FFD700] font-traditional font-bold mt-1.5 tracking-wider uppercase">
                    Uthsav Invites
                  </span>
                </div>

              </div>

              {/* Collaboration Cross Emblem */}
              <div className="flex flex-col items-center justify-center px-1 sm:px-2">
                <span className="text-[10px] text-[#FFD700] drop-shadow-[0_0_6px_rgba(255,215,0,0.6)] select-none leading-none mb-0.5">✧</span>
                <span className="text-[#FFD700]/70 font-serif text-lg font-light select-none leading-none">
                  ×
                </span>
                <span className="text-[10px] text-[#FFD700] drop-shadow-[0_0_6px_rgba(255,215,0,0.6)] select-none leading-none mt-0.5">✧</span>
              </div>

              {/* === RIGHT BRAND: Uday Studio with Floating Right Icons === */}
              <div className="flex items-center gap-2 sm:gap-2.5">

                {/* Uday Studio Circular Logo (2.jpg) */}
                <div className="flex flex-col items-center">
                  <div
                    className="relative group p-[2px] rounded-full bg-gradient-to-tr from-[#FFD700] via-[#FFE57F] to-[#B8860B] shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_28px_rgba(255,215,0,0.55)] transition-all duration-300 hover:scale-105"
                    title="Uday Studio"
                  >
                    <div className="w-[66px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full overflow-hidden bg-[#240306] border border-[#FFD700]/50 flex items-center justify-center">
                      <img
                        src="/us.png"
                        alt="Uday Studio"
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-[#FFD700] font-traditional font-bold mt-1.5 tracking-wider uppercase">
                    Uday Studio
                  </span>
                </div>

                {/* Floating Action Icons (Right Column) */}
                <div className="flex flex-col items-center gap-2">
                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/919966657783?text=Hi%20Uday%20Studio%2C%20I%20would%20like%20to%20connect%20regarding%Wedding%Invitation."
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Uday Studio WhatsApp"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }}
                    whileHover={{ scale: 1.18, boxShadow: '0 0 12px rgba(255,215,0,0.6)' }}
                    whileTap={{ scale: 0.92 }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#800000]/70 hover:bg-[#FFD700] border border-[#FFD700]/50 text-[#FFD700] hover:text-[#38060A] flex items-center justify-center shadow-md backdrop-blur-xs transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </motion.a>

                  {/* Website */}
                  <motion.a
                    href="https://udaystudio.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Uday Studio Website"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.05 }}
                    whileHover={{ scale: 1.18, boxShadow: '0 0 12px rgba(255,215,0,0.6)' }}
                    whileTap={{ scale: 0.92 }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#800000]/70 hover:bg-[#FFD700] border border-[#FFD700]/50 text-[#FFD700] hover:text-[#38060A] flex items-center justify-center shadow-md backdrop-blur-xs transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href="https://www.instagram.com/udaystudio_pgr?rpxt=MWxxb3B5bmR3bWh3aA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Uday Studio Instagram"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.75 }}
                    whileHover={{ scale: 1.18, boxShadow: '0 0 12px rgba(255,215,0,0.6)' }}
                    whileTap={{ scale: 0.92 }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#800000]/70 hover:bg-[#FFD700] border border-[#FFD700]/50 text-[#FFD700] hover:text-[#38060A] flex items-center justify-center shadow-md backdrop-blur-xs transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </motion.a>
                </div>

              </div>
            </motion.div>
          </motion.div>

          {/* Luxury Filigree Divider */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.22}
            variants={fadeUp}
            className="flex items-center justify-center gap-2 w-full max-w-[180px] my-2"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#FFD700] bg-[#FFD700]/20" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#FFD700]/30 to-transparent" />
          </motion.div>

          {/* Closing Signature */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.28}
            variants={fadeUp}
            className="flex items-center justify-center gap-1.5 mt-1 text-white/50 font-serif italic text-[8.5px] sm:text-[9.5px] tracking-wide"
          >
            <span>Crafted with creativity & attention to detail</span>
            <span className="text-[#FFD700] not-italic">♡</span>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
