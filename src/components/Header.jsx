import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Calendar, Info, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Events", path: "/events", icon: <Calendar size={18} /> },
    { name: "About", path: "/about", icon: <Info size={18} /> },
  ];

  return (
    <header
      className={`p-5 fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-wide cursor-pointer select-none"
        >
          <Link
            to="/"
            className="text-zinc-800/80 hover:text-zinc-800 transition-colors duration-300"
          >
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-gray-600"
            >
              Communion
            </motion.span>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Hub
            </motion.span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex space-x-10 text-lg font-semibold">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <motion.div
                key={item.name}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-zinc-700 hover:text-blue-500"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      duration: 0.5,
                      type: "spring",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  {item.name}
                </Link>

                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 rounded-full ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  initial={isActive ? { width: "100%" } : { width: "0%" }}
                  animate={isActive ? { width: "100%" } : { width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </nav>

        <motion.button
          className="md:hidden focus:outline-none bg-blue-100 hover:bg-blue-200 p-2 rounded-full transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.8 }}
          whileHover={{ rotate: 10 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden absolute top-16 left-0 w-full p-6 bg-white/95 backdrop-blur-lg rounded-b-2xl"
          >
            <nav className="flex flex-col items-center space-y-4 text-xl font-semibold h-screen">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;

                return (
                  <motion.div
                    key={item.name}
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between w-full  p-3 rounded-lg ${
                        isActive
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-gray-100"
                      } transition-all duration-300`}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {item.icon}
                        </motion.div>
                        {item.name}
                      </div>

                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronRight size={16} className="text-indigo-500" />
                        </motion.div>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
