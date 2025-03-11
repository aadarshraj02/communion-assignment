import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gradient-to-r from-slate-100 to-zinc-100 border-t border-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-zinc-600">
                Communion Hub
              </h2>
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              Connecting communities through faith, events, and shared
              experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="/"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="/"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="/"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for the latest events and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-600 transition-all"
                required
              />
              <motion.button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-zinc-600 rounded-lg hover:shadow-md transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            © {new Date().getFullYear()} Communion Hub. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center">
              <span>Made with</span>
              <Heart size={14} className="mx-1 text-red-500" />
              <span>by Communion Hub Team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
