import { motion } from "framer-motion";

export default function FloatingElements() {
  return (
    <div className="relative w-full max-w-5xl mt-16">
      {[1, 2, 3, 4, 5].map((idx) => (
        <motion.div
          key={idx}
          className="absolute hidden sm:block w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-zinc-500 opacity-70"
          style={{
            left: `${15 + idx * 18}%`,
            top: `${(idx % 3) * 30}px`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + idx * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: idx * 0.3,
          }}
        />
      ))}
    </div>
  );
}
