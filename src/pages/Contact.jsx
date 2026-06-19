import { Phone, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>

      <section className="bg-[#dfeaf5] py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900">
              Contact us
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
              Get in touch with us for any inquiries or to schedule a service.
              Our friendly team is here to assist you and ensure all your needs
              are met.
            </p>
          </motion.div>

          {/* Contact Box */}
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden">

            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/contact.png"
                alt="Cleaner"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#3b44f6] p-8 md:p-12"
            >
              <h3 className="text-yellow-400 text-4xl md:text-5xl font-bold mb-10">
                Send us message
              </h3>

              <form className="space-y-6">

                {/* Name */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Dennis barrett"
                    className="w-full p-4 rounded-lg outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full p-4 rounded-lg outline-none"
                  />
                </div>

                {/* Row */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1234567890"
                      className="w-full p-4 rounded-lg outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Select service
                    </label>
                    <select className="w-full p-4 rounded-lg outline-none">
                      <option>Select service</option>
                      <option>Office Cleaning</option>
                      <option>Kitchen Cleaning</option>
                      <option>Window Cleaning</option>
                      <option>Deep Cleaning</option>
                    </select>
                  </div>
                </div>

                {/* Row */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Your location"
                      className="w-full p-4 rounded-lg outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-4 rounded-lg outline-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl text-lg"
                >
                  Submit Request
                </motion.button>

              </form>
            </motion.div>

          </div>
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-start gap-5">
                <div className="bg-[#3b44f6] p-4 rounded-xl">
                  <Phone className="text-white w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-4xl font-bold">Phone</h3>
                  <p className="text-gray-700 mt-2 text-xl">
                    +1 (234) 567-8901
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-start gap-5">
                <div className="bg-[#3b44f6] p-4 rounded-xl">
                  <MapPin className="text-white w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-4xl font-bold">Address</h3>
                  <p className="text-gray-700 mt-2 text-xl">
                    Chicago HQ Estica Corp.
                    <br />
                    Macomb, MI 48042
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-start gap-5">
                <div className="bg-[#3b44f6] p-4 rounded-xl">
                  <Mail className="text-white w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-4xl font-bold">Email</h3>
                  <p className="text-gray-700 mt-2 text-xl">
                    info@example.com
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Service Area */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-12 items-start"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900">
                We serve in area
              </h2>
            </div>

            <div>
              <ul className="space-y-6 text-2xl font-semibold text-gray-500">
                <li>• New York, US</li>
                <li>• Ontario, Canada</li>
                <li>• London, UK</li>
                <li>• Melbourne, Australia</li>
              </ul>
            </div>

            <div>
              <ul className="space-y-6 text-2xl font-semibold text-gray-500">
                <li>• Wellington, New Zealand</li>
                <li>• Paris, France</li>
                <li>• Venice, Italy</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default Contact