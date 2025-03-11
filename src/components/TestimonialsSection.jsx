import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Chloe Johnson",
    role: "Community Leader",
    text: "This app has transformed how we connect! It’s never been easier to organize events and bring people together.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Wick",
    role: "Volunteer Coordinator",
    text: "I love how seamless and intuitive the interface is. It truly makes community-building effortless!",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Jane Doe",
    role: "Faith Organizer",
    text: "A game-changer for faith-based communities! Highly recommended for anyone looking to stay connected.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <motion.div
      className="mt-24 max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        What People Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-left flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-blue-600 text-sm">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
