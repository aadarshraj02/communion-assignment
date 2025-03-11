import { motion } from "framer-motion";
import { Calendar, MapPin, Tag, Heart, Share2 } from "lucide-react";
import { useState } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: { y: -8, scale: 1.02, transition: { duration: 0.2 } },
};

const EventCard = ({ event }) => {
  const [isLiked, setIsLiked] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="p-5 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>

        <div className="space-y-2 text-gray-500">
          <div className="flex items-center">
            <Calendar size={18} className="mr-2 text-blue-600" />
            <span>{formatDate(event.date)}</span>
          </div>

          <div className="flex items-center">
            <MapPin size={18} className="mr-2 text-blue-600" />
            <span>{event.location}</span>
          </div>

          <div className="flex items-center">
            <Tag size={18} className="mr-2 text-blue-600" />
            <span className="capitalize">{event.category}</span>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
        <motion.button
          onClick={() => setIsLiked(!isLiked)}
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-full ${
            isLiked ? "bg-red-100" : "hover:bg-gray-100"
          } transition-colors`}
        >
          <Heart
            size={20}
            className={isLiked ? "text-red-500 fill-red-500" : "text-gray-500"}
          />
        </motion.button>

        <motion.button
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          <Share2 size={20} className="text-gray-500" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EventCard;
