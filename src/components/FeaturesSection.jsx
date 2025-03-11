import { motion } from "framer-motion";
import { Calendar, Users, Heart } from "lucide-react";

const featureItems = [
  {
    icon: <Calendar size={28} />,
    title: "Community Events",
    description: "Discover local gatherings that match your interests.",
  },
  {
    icon: <Users size={28} />,
    title: "Connect & Share",
    description: "Build meaningful relationships with like-minded individuals.",
  },
  {
    icon: <Heart size={28} />,
    title: "Support & Growth",
    description: "Find spiritual and emotional support in your journey.",
  },
];

export default function FeaturesSection() {
  return (
    <motion.div
      className="mt-24 max-w-6xl mx-auto w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl sm:text-4xl  font-bold text-gray-700 mb-12 sm:-mt-6 -mt-20 text-center">
        How Communion Hub Helps You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {featureItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-left flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-4 p-3 bg-blue-100 rounded-lg inline-block text-blue-700">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
