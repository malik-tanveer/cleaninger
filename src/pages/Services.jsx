import React from "react";
import { motion } from "framer-motion";



const services = [
  {
    title: "Office cleaning",
    desc: "Designed to maintain a pristine & productive workspace, tailored to your business needs.",
    img: "/officeCleaning.png",
  },
  {
    title: "Window cleaning",
    desc: "Crystal-clear window cleaning services that brighten your view of your property.",
    img: "/windowCleaning.png",
  },
  {
    title: "Carpet cleaning",
    desc: "Removes dirt, stains, and allergens, leaving your carpets fresh and revitalized.",
    img: "/carpetCleaning.png",
  },
  {
    title: "Bedroom cleaning",
    desc: "Ensures a tidy, dust-free, and relaxing environment for your rest.",
    img: "/bedroomCleaning.png",
  },
];


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 font-sans">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden min-h-[500px]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#3b44f6] text-white p-8 md:p-16 flex flex-col justify-center items-start"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6"
            >
              Expert cleaning solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-blue-100 leading-relaxed max-w-xl"
            >
              We pride ourselves on delivering top-tier cleaning services designed
              to meet your unique needs. Our team of skilled professionals utilizes
              cutting-edge techniques.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full min-h-[350px] lg:min-h-full overflow-hidden"
          >
            <motion.img
              src="/services.png"
              alt="Professional cleaner working in kitchen"
              className="w-full h-full object-cover object-center absolute inset-0"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>

        </div>
      </section>

      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((item, i) => (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-blue-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="inline-block mt-4 text-black font-semibold underline"
                  >
                    Read more
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
    </>
  );
};

export default HeroSection;