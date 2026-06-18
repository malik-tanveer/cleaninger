import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";


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

const stats = [
  {
    number: "300+",
    title: "Projects completed",
    color: "text-indigo-600",
  },
  {
    number: "98%",
    title: "Client retention rate",
    color: "text-yellow-500",
  },
  {
    number: "50+",
    title: "Professional cleaners",
    color: "text-indigo-600",
  },
];

const plans = [
  {
    price: "$19",
    title: "Basic cleaning package",
    description:
      "Ideal for regular maintenance of your home or office.",
    features: [
      "Dusting",
      "Vacuuming",
      "Sweeping and mopping",
      "Surface cleaning",
    ],
    featured: false,
  },
  {
    price: "$59",
    title: "Standard cleaning package",
    description:
      "Includes all services in the Basic package plus additional services.",
    features: [
      "Everything in basic cleaning",
      "Bathroom scrubbing",
      "Kitchen appliance cleaning",
      "Baseboard and trim cleaning",
    ],
    featured: true,
  },
  
  {
    price: "$119",
    title: "Deep cleaning package",
    description:
      "Perfect for seasonal cleaning or move-ins/outs.",
    features: [
      "Everything in standard cleaning",
      "Carpet cleaning",
      "Window washing",
      "High dusting (e.g., ceiling fans)",
    ],
    featured: false,
  },
];

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer a comprehensive range of cleaning services, including residential cleaning, commercial janitorial services, carpet cleaning, window washing, and deep cleaning. Our services are tailored to meet the unique needs of each client.",
  },
  {
    q: "How do I book a cleaning service?",
    a: "Booking a service is easy! You can schedule an appointment online through our website, give us a call, or send us an email. Our customer service team is ready to assist you with your booking.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We understand that plans can change. If you need to cancel or reschedule your appointment, please contact us at least 24 hours in advance. Cancellations made less than 24 hours before the scheduled service may incur a fee.",
  },
  {
    q: "Can I request the same cleaning team for each visit?",
    a: "We strive to provide consistency for our clients. If you prefer the same cleaning team for each visit, please let us know, and we will do our best to accommodate your request.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "It’s up to you! You can choose to be present during the cleaning, or you can provide us with access to your home or office. Our trusted staff will ensure your property is secure and well-cared for.",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

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

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Delivering superior cleaning services with
            <br />
            unwavering dedication
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className="text-center"
              >
                <h3 className={`text-6xl md:text-7xl font-bold ${item.color}`}>
                  {item.number}
                </h3>

                <p className="mt-4 text-xl md:text-2xl font-semibold text-gray-900">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className=" py-24 px-5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-5xl md:text-7xl font-bold text-[#1e1e1e] mb-20"
          >
            Our pricing
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                }}
                className={`rounded-2xl p-12 relative ${
                  plan.featured
                    ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white"
                    : "bg-[#dfeaf4]"
                }`}
              >
                {/* Price */}
                <h3 className="font-bold text-6xl mb-8">
                  {plan.price}
                  <span className="text-xl font-semibold"> / visit</span>
                </h3>

                {/* Title */}
                <h4 className="text-3xl font-bold mb-4">
                  {plan.title}
                </h4>

                {/* Description */}
                <p
                  className={`mb-12 text-lg ${
                    plan.featured
                      ? "text-white/80"
                      : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>

                <h5 className="font-bold text-3xl mb-8">
                  Includes:
                </h5>

                <ul className="space-y-5 mb-12">
                  {plan.features.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-lg"
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          plan.featured
                            ? "bg-white/20"
                            : "bg-gray-300"
                        }`}
                      >
                        <Check size={14} />
                      </div>

                      {item}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <motion.button
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`px-8 py-4 rounded-lg font-bold text-lg ${
                    plan.featured
                      ? "bg-yellow-400 text-black"
                      : "bg-indigo-600 text-white"
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden border"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg"
              >
                {item.q}

                <span className="text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-600"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Services;

