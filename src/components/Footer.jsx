import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative py-10 bg-[#03050f] border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Centered Copyright text */}
        <p className="text-slate-400 text-sm font-medium mx-auto">
          © 2026 <span className="text-white font-semibold">Om Prasad Pradhan</span>. All rights reserved.
        </p>

      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-50 p-3.5 rounded-full purple-glow-btn text-white shadow-2xl border border-purple-400/40 cursor-pointer active:scale-95 transition-transform"
          >
            <ArrowUp className="w-5 h-5 animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
