import React from 'react';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  const quoteText = "Two lives, two hearts, joined together in friendship, united forever in love. Under the divine presence of Sri Parvathi Parameshwara Swamy and the blessings of our families, we begin our sacred journey together.";
  const words = quoteText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="story" className="py-12 px-4 text-center bg-transparent relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="glass-maroon p-8 sm:p-12 md:p-16 rounded-[2rem] border-2 border-[#800000]/10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-script text-[#800000] mb-6 relative z-10 whitespace-nowrap"
          >
            Our Sacred Union
          </motion.h2>

          <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-[#4A0E0E] font-serif text-base sm:text-lg md:text-xl italic leading-relaxed max-w-3xl mx-auto mb-14 relative z-10 flex flex-wrap justify-center gap-x-1.5 gap-y-1"
          >
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Bride & Groom with centered heart */}
          <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-8 md:gap-12">
            {/* Bride */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-[120px] sm:w-[160px] md:w-[200px] flex flex-col items-center text-center group"
            >
              <div className="relative mb-4">
                <motion.img
                  initial={{ rotate: -10, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  src="/3.12.jpg"
                  alt="Prasanna Priya"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-[#FFD700] p-1 object-cover shadow-xl group-hover:-rotate-3 transition-transform"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#800000] text-[#FFD700] text-[9px] sm:text-[11px] px-3 sm:px-5 py-0.5 sm:py-1 rounded-full font-bold border-2 border-[#FFD700] shadow-lg tracking-[0.2em] whitespace-nowrap">
                  BRIDE
                </div>
              </div>
              <p className="font-traditional font-bold text-base sm:text-xl md:text-2xl text-[#800000] tracking-wide leading-tight">
                Prasanna<br />Priya
              </p>
            </motion.div>

            {/* Heart - centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center self-center shrink-0"
            >
              <div className="w-px h-10 sm:h-14 bg-gradient-to-b from-transparent via-[#FFD700] to-transparent"></div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl sm:text-4xl md:text-5xl text-[#FFD700] drop-shadow-md my-1"
              >
                ❤️
              </motion.div>
              <div className="w-px h-10 sm:h-14 bg-gradient-to-t from-transparent via-[#FFD700] to-transparent"></div>
            </motion.div>

            {/* Groom */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-[120px] sm:w-[160px] md:w-[200px] flex flex-col items-center text-center group"
            >
              <div className="relative mb-4">
                <motion.img
                  initial={{ rotate: 10, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  src="/3.11.jpg"
                  alt="Kiran"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-[#FFD700] p-1 object-cover shadow-xl group-hover:rotate-3 transition-transform"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#800000] text-[#FFD700] text-[9px] sm:text-[11px] px-3 sm:px-5 py-0.5 sm:py-1 rounded-full font-bold border-2 border-[#FFD700] shadow-lg tracking-[0.2em] whitespace-nowrap">
                  GROOM
                </div>
              </div>
              <p className="font-traditional font-bold text-base sm:text-xl md:text-2xl text-[#800000] whitespace-nowrap tracking-wide">
                C. Kiran
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Story;
