import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, GlassWater, Calendar, ArrowRight } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
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
            Our Mission & Vision
          </span>
        </motion.div>

        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          <motion.span
            className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-zinc-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Building Bridges
          </motion.span>
          <motion.span
            className="block mt-2 text-zinc-600/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Between Communities
          </motion.span>
        </h1>

        <motion.p
          className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          We believe that meaningful connections across different faith
          traditions and community groups create stronger, more resilient, and
          more compassionate societies.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center mb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1 text-sm font-semibold text-blue-900 bg-blue-100 rounded-full inline-block">
              Our Story
            </span>
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-zinc-600">
              How It All Started
            </span>
          </h2>
          <p className="text-gray-600 mb-4">
            Our journey began with a simple observation: in our increasingly
            diverse society, there was a need for more meaningful interaction
            between different faith communities. What started as small
            interfaith gatherings has grown into a platform connecting thousands
            of people across different backgrounds and beliefs.
          </p>
          <p className="text-gray-600">
            Founded in 2022, we've been dedicated to breaking down barriers
            through shared experiences, open dialogue, and collaborative
            community service. Our platform brings together religious groups,
            community organizations, and individuals who seek to make a positive
            impact.
          </p>
        </motion.div>

        <motion.div
          className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-50 to-zinc-50 h-80 flex items-center justify-center"
          variants={itemVariants}
        >
          <div className="text-center p-8">
            <motion.div
              className="w-24 h-24 bg-gradient-to-r from-blue-600 to-zinc-600 rounded-full mx-auto flex items-center justify-center mb-4"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 2,
                repeat: Infinity,
                repeatDelay: 15,
              }}
            >
              <Users size={40} className="text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">5,000+</h3>
            <p className="text-gray-600">Community members connected</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1 text-sm font-semibold text-blue-900 bg-blue-100 rounded-full inline-block">
              Our Values
            </span>
          </motion.div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-zinc-600 mb-4">
            What We Stand For
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core principles guide everything we do and represent our
            commitment to fostering understanding and cooperation across
            communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Heart size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Compassion</h3>
            <p className="text-gray-600">
              We believe in approaching differences with empathy and
              understanding, recognizing the humanity in every individual
              regardless of their background.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <GlassWater size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Inclusivity
            </h3>
            <p className="text-gray-600">
              Our platform welcomes people of all faiths, traditions, and
              backgrounds. We celebrate diversity and create space for all
              voices to be heard.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Calendar size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">
              We're committed to building meaningful connections through shared
              experiences, collaborative projects, and respectful dialogue that
              enriches all participants.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="text-center bg-gradient-to-r from-blue-50 to-zinc-50 rounded-2xl p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-zinc-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Be Part of Our Community
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Whether you're looking to connect with others, share your faith
          journey, or contribute to positive community change, we invite you to
          join us in building bridges across different communities.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.6,
            type: "spring",
            stiffness: 120,
          }}
          viewport={{ once: true }}
        >
          <Link
            to="/events"
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-zinc-600 rounded-lg shadow-md hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
          >
            Find Events Near You
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
        </motion.div>
      </motion.div>
    </div>
  );
}
