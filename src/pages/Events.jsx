import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Plus } from "lucide-react";
import eventsData from "../data/events";
import EventList from "../components/EventList";
import AddEventModal from "../components/AddEventModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedEvents =
      JSON.parse(localStorage.getItem("events")) || eventsData;
    setEvents(storedEvents);
  }, []);

  const handleAddEvent = (newEvent) => {
    const updatedEvents = [newEvent, ...events];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" ||
      event.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center mb-10" variants={itemVariants}>
        <span className="px-4 py-1 text-sm font-semibold text-blue-900 bg-blue-100 rounded-full inline-block mb-4">
          Community Gatherings
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-zinc-600">
            Upcoming Events
          </span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Discover gatherings that bring our community together for support,
          connection, and growth.
        </p>
      </motion.div>

      <motion.div className="p-6 rounded-xl mb-10" variants={itemVariants}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            className="py-3 px-4 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="religious">Religious</option>
            <option value="social">Social</option>
            <option value="charity">Charity</option>
          </select>
        </div>
      </motion.div>

      <EventList events={filteredEvents} />

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 cursor-pointer flex rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <Plus size={24} /> Add Event
      </button>

      {isModalOpen && (
        <AddEventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddEvent={handleAddEvent}
        />
      )}
    </motion.div>
  );
};

export default Events;
