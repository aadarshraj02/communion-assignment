import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <motion.div
      className="mt-24 max-w-4xl mx-auto w-full px-4 py-10 bg-gradient-to-r from-blue-600 to-zinc-600 rounded-2xl text-white shadow-xl scroll-reveal"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Ready to Connect With Your Community?
      </motion.h2>
      <motion.p
        className="text-lg mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Join thousands of others who have found meaningful connections through
        Communion Hub.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link
          to="/events"
          className="px-8 py-4 text-lg font-semibold bg-white text-blue-700 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 inline-block"
        >
          Find Or Create Your Next Event
        </Link>
      </motion.div>
    </motion.div>
  );
}
