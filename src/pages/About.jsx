import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const AboutHero = () => {
  const aboutData = [
    {
      title: "Our mission",
      description:
        "Clearly state your commitment to providing top-notch cleaning services that prioritize customer satisfaction, safety, and environmental sustainability.",
    },
    {
      title: "Our story",
      description:
        "Our story began with a simple yet powerful idea: to create a cleaning service that genuinely cares about its clients and the environment.",
    },
    {
      title: "Our vision",
      description:
        "Our vision is to be recognized as the leading cleaning service provider in our region, known for our unwavering commitment to quality and customer care.",
    },
  ];

  const features = [
    "Exceptional quality",
    "Customer satisfaction",
    "Eco-friendly practices",
    "Customized solutions",
    "Reliable and trustworthy",
    "Affordable pricing",
    "Positive reviews",
  ];

  const CounterNumber = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    return rounded.on("change", (latest) =>
      setDisplayValue(latest)
    );
  }, [rounded]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const stats = [
  { value: 300, suffix: "+", label: "Projects completed" },
  { value: 50, suffix: "+", label: "Professional cleaners" },
  { value: 98, suffix: "%", label: "Client retention rate" },
  { value: 28, suffix: "+", label: "Award winning" },
];

const services = [
  {
    title: "Office cleaning",
    desc: "Designed to maintain a pristine & productive workspace, tailored to your needs.",
  },
  {
    title: "Window cleaning",
    desc: "Crystal-clear window cleaning services that brighten your view of your property.",
  },
  {
    title: "Carpet cleaning",
    desc: "Removes dirt, stains, and allergens leaving your carpets fresh and revitalized.",
  },
];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#dce6f1] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5">
          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Excellence in every clean
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                At our company, we believe that every clean matters. Our
                commitment to excellence is reflected in our meticulous
                attention to detail and the high standards we uphold in every
                service we provide. From residential spaces to commercial
                properties.
              </p>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/about.png"
              alt="Cleaning Team"
              className="w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover rounded-3xl"
            />
          </motion.div>

          {/* Mission / Story / Vision */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {aboutData.map((item, index) => (
              <motion.div
                key={index}
                className="border-t border-gray-300 pt-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your satisfaction is our priority
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                We prioritize open communication and responsiveness to your
                needs. We value your feedback and continuously strive to
                improve our services, ensuring that you receive the highest
                level of care and attention.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg flex items-center gap-3 transition-all"
              >
                View all services

                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gray-100 rounded-3xl scale-95"></div>

              <img
                src="/satisfaction.png"
                alt="Cleaning Team"
                className="relative w-full h-[450px] md:h-[550px] object-cover rounded-3xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="bg-black text-white py-14">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl md:text-5xl font-bold">
                <CounterNumber value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-16"
          >
            Our most valued services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Office Cleaning */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#eef6ff] rounded-3xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full shadow-md mx-auto mb-6 flex items-center justify-center">
                <img
                  src="/office.png"
                  alt="Office Cleaning"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Office cleaning
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Designed to maintain a clean & productive workspace tailored to your needs.
              </p>
            </motion.div>

            {/* Window Cleaning */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#eef6ff] rounded-3xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full shadow-md mx-auto mb-6 flex items-center justify-center">
                <img
                  src="/window.png"
                  alt="Window Cleaning"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Window cleaning
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Crystal-clear windows that brighten your home and office.
              </p>
            </motion.div>

            {/* Carpet Cleaning */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#eef6ff] rounded-3xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full shadow-md mx-auto mb-6 flex items-center justify-center">
                <img
                  src="/carpet.png"
                  alt="Carpet Cleaning"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Carpet cleaning
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Deep cleaning that removes dirt, stains and allergens.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;