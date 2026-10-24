import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function RouteCurtain() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#070f1a]"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.12, duration: 0.35 }}
          className="w-16 h-16 bg-[#ff6b35] rounded-xl flex items-center justify-center shadow-layer-3"
        >
          <Code2 className="w-9 h-9 text-white" />
        </motion.div>
        <span className="font-['Syne'] text-3xl md:text-4xl font-black text-white tracking-tight">
          THE JIMMY LAB<span className="text-[#ff3c2f]">.</span>
        </span>
      </div>
    </motion.div>
  );
}
