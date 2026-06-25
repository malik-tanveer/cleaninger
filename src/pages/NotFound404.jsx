import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound404 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[90px] md:text-[140px] font-extrabold text-[#12141d] leading-none"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl md:text-4xl font-bold text-[#12141d] mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-8"
        >
          Sorry, the page you are looking for does not exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/"
            className="bg-[#ffcb05] hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg transition"
          >
            Back to Home
          </Link>

          <Link
            to="/contact"
            className="bg-[#12141d] hover:bg-black text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound404;