import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      className="mt-24 max-w-4xl mx-auto text-center px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        About Communion Hub
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Our mission is to connect people through faith, shared interests, and
        meaningful events. Whether you're looking for a local gathering or an
        online support group, Communion Hub makes it easy.
      </p>
    </motion.div>
  );
}
