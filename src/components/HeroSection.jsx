import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4"
      >
        <span className="px-4 py-1 text-sm font-semibold text-blue-900 bg-blue-100 rounded-full inline-block">
          Bringing Faith Communities Together
        </span>
      </motion.div>

      <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
        <motion.span
          className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-zinc-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Connecting People
        </motion.span>
        <motion.span
          className="block mt-2 text-zinc-600/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Across Faiths & Interests
        </motion.span>
      </h1>

      <motion.p
        className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        Discover events that bring communities together for support, faith, and
        meaningful connections.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 2,
          duration: 0.6,
          type: "spring",
          stiffness: 120,
        }}
      >
        <Link
          to="/events"
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-zinc-600 rounded-lg shadow-md hover:scale-105 transition-transform flex items-center justify-center gap-2"
        >
          Explore Events
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1.5,
              repeatDelay: 0.5,
            }}
          >
            <ArrowRight size={18} />
          </motion.span>
        </Link>

        <Link
          to="/about"
          className="px-6 py-3 text-lg font-semibold text-blue-700 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all"
        >
          Learn More
        </Link>
      </motion.div>
    </motion.div>
  );
}
