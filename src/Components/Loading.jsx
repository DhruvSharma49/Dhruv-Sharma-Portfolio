import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingOverlay({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-center items-center bg-[#0a0a0a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Spinner */}
          <motion.div
            className="h-16 w-16 rounded-full border-4 border-white/20 border-t-white"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />

          {/* Optional bouncing dots below spinner */}
          <div className="flex gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-2 w-2 rounded-full bg-white/70"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 0,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Text */}
          <motion.p
            className="mt-3 text-sm tracking-widest text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            PREPARING EXPERIENCE…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
