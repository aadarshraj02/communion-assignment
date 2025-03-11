import { motion } from "framer-motion";
import EventCard from "./EventCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.5 },
  },
};

const EventList = ({ events }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {events.length > 0 ? (
        events.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <motion.div
          className="text-center col-span-3 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Events Found
          </h3>
          <p className="text-gray-500">
            Try searching for a different event or changing the category.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EventList;
