import logo1 from "/logo1.svg";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#12141d] text-gray-400 overflow-hidden">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-[#ffcb05] text-black px-6 py-8 md:py-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center md:text-left leading-tight">
            Claim your free first Cleaning
            <br />
            today.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg flex items-center gap-2"
            >
              Claim free visit →
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+13944955993"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-center"
            >
              Call us: +1-394-495-5993
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* Logo */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-5"
          >
            <motion.img
              src={logo1}
              alt="Logo"
              className="h-14 w-auto"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <p className="leading-relaxed">
            We handle repairs & maintenance for all appliances with expertise &
            efficiency to ensure your appliances.
          </p>
        </div>

        {/* Links */}
        <div>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-[#ffcb05] font-semibold">
                Home
              </a>
            </li>
            <li><a href="#">Home 2</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Service Static</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <ul className="space-y-4">
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">Instructions</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Link in Bio</a></li>
            <li><a href="#">Coming Soon</a></li>
            <li><a href="#">Password Protected</a></li>
            <li><a href="#">Error 404</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <FaEnvelope />
            <span>info@example.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt />
            <span>+1 (234) 567-8901</span>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1" />
            <span>
              544 Honey Creek Rd.
              <br />
              West Des Moines,
              <br />
              IA 50265
            </span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-sm text-center">
            Designed by{" "}
            <span className="text-white font-semibold">
              Webestica
            </span>
            , Powered by{" "}
            <span className="text-white font-semibold">
              Webflow
            </span>
          </p>

          <div className="flex items-center gap-5 text-white text-xl">
            {[FaFacebookF, FaInstagram, FaXTwitter].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;