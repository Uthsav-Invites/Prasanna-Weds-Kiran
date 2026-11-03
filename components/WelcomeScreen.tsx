import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeScreenProps {
    onOpen: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onOpen }) => {
    React.useEffect(() => {
        // Prevent scrolling on the welcome page
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[1000] bg-[#4A0E0E] flex items-center justify-center overflow-hidden touch-none"
        >
            {/* Background image with subtle Ken Burns effect */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-35 will-change-transform"
                style={{ backgroundImage: "url('/010.jpeg')" }}
            />

            {/* Dark gradient overlay for legibility without heavy runtime filters */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#4A0E0E]/50 to-black/85 backdrop-blur-[2px] z-[1]" />

            {/* Decorative Corner Mandalas */}
            <div className="absolute -top-24 -left-24 w-64 h-64 md:w-96 md:h-96 opacity-15 pointer-events-none z-[2] animate-spin" style={{ animationDuration: '40s' }}>
                <svg viewBox="0 0 200 200" className="w-full h-full text-[#FFD700] fill-current">
                    <path d="M100,0 C110,40 150,40 150,100 C150,160 110,160 100,200 C90,160 50,160 50,100 C50,40 90,40 100,0 Z" />
                </svg>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 md:w-96 md:h-96 opacity-15 pointer-events-none z-[2] animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
                <svg viewBox="0 0 200 200" className="w-full h-full text-[#FFD700] fill-current">
                    <path d="M100,0 C110,40 150,40 150,100 C150,160 110,160 100,200 C90,160 50,160 50,100 C50,40 90,40 100,0 Z" />
                </svg>
            </div>

            {/* Main Interactive Invitation Container */}
            <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center justify-center">

                {/* Traditional Invocations */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-2"
                >
                    <p className="text-[11px] md:text-xs font-serif text-[#FFD700] tracking-[0.25em] uppercase drop-shadow">
                        Srirasthu • Subhamasthu • Kalyanamasthu
                    </p>
                    <p className="text-[10px] md:text-xs text-amber-200/90 font-serif tracking-widest mt-1">
                        ॥ Sri Parvathi Parameshwara Swamy Prasannam ॥
                    </p>
                </motion.div>

                {/* Floating Diya Icon Motif */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 md:w-20 md:h-20 my-2 pointer-events-none"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#FFD700] fill-current drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]">
                        <path d="M50 12 C54 22 64 32 64 47 C64 62 58 72 50 72 C42 72 36 62 36 47 C36 32 46 22 50 12 Z" fill="#FFA500" />
                        <path d="M50 20 C52 27 58 35 58 45 C58 55 54 62 50 62 C46 62 42 55 42 45 C42 35 48 27 50 20 Z" fill="#FFD700" className="animate-pulse" />
                        <path d="M15 65 C15 65 30 85 50 85 C70 85 85 65 85 65 C85 65 70 75 50 75 C30 75 15 65 15 65 Z" fill="#800000" stroke="#FFD700" strokeWidth="2.5" />
                    </svg>
                </motion.div>

                {/* Andela Vari Wedding Invitation Header */}
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex flex-col items-center mb-2"
                >
                    <div className="text-xs md:text-sm font-bold text-[#FFD700] uppercase tracking-[0.4em] drop-shadow">
                        Andela Vari
                    </div>
                    <div className="text-xl md:text-2xl font-script text-[#FFD700] tracking-wider mt-0.5">
                        Wedding Invitation
                    </div>

                    {/* Gold Gradient Flourish Divider */}
                </motion.div>

                {/* Welcome Subheader */}
                <p className="text-white font-serif italic text-xs md:text-sm mb-3 max-w-md tracking-wider leading-relaxed opacity-90">
                    Cordially invite you to celebrate the marriage of
                </p>

                {/* Main Names with Gold Glow Effect */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-6"
                >
                    <h1 className="text-white font-traditional text-3xl sm:text-5xl md:text-6xl mb-1 drop-shadow-[0_0_35px_rgba(255,215,0,0.65)] font-bold tracking-wide flex flex-col items-center gap-1">
                        <span className="whitespace-nowrap">Prasanna Priya</span>
                        <span className="text-[#FFD700] font-script text-3xl sm:text-5xl md:text-6xl leading-none">&</span>
                        <span className="whitespace-nowrap">Kiran</span>
                    </h1>
                    <p className="text-[#FFD700]/90 font-serif italic text-xs md:text-sm mt-2 tracking-widest">
                        19th November, 2026 • Punganur
                    </p>
                </motion.div>

                {/* Unlocked Open Invitation Button */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="w-full flex justify-center"
                >
                    <motion.button
                        onClick={onOpen}
                        animate={{
                            boxShadow: [
                                "0 0 15px rgba(255,215,0,0.3)",
                                "0 0 35px rgba(255,215,0,0.7)",
                                "0 0 15px rgba(255,215,0,0.3)"
                            ]
                        }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{
                            scale: 1.05,
                            background: "linear-gradient(to right, #FFD700, #FFB300)",
                            color: "#4A0E0E",
                            boxShadow: "0 0 45px rgba(255, 215, 0, 0.85)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-3.5 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-full transition-all duration-300 tracking-[0.28em] text-xs md:text-sm group relative overflow-hidden shadow-2xl"
                    >
                        <span className="relative z-10 font-bold flex items-center gap-2">
                            <span>OPEN INVITATION</span>
                            <span className="text-sm">✦</span>
                        </span>
                    </motion.button>
                </motion.div>

                {/* Footer Invitation Phrase */}
                <p className="mt-5 text-white/70 text-[9.5px] uppercase tracking-widest font-bold">
                    Bless us with your esteemed presence
                </p>
            </div>
        </motion.div>
    );
};

export default WelcomeScreen;
