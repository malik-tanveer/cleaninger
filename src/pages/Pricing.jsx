import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";


const plans = [
  {
    price: "$19",
    title: "Basic cleaning package",
    desc: "Ideal for regular maintenance of your home or office.",
    features: [
      "Dusting",
      "Vacuuming",
      "Sweeping and mopping",
      "Surface cleaning",
    ],
    button: "Get started",
    color: "bg-indigo-600",
  },
  {
    price: "$59",
    title: "Standard cleaning package",
    desc: "Includes all services in the Basic package plus additional services.",
    features: [
      "Everything in basic cleaning",
      "Bathroom scrubbing",
      "Kitchen appliance cleaning",
      "Baseboard and trim cleaning",
    ],
    button: "Get started",
    color: "bg-yellow-500",
  },

  
  {
    price: "$119",
    title: "Deep cleaning package",
    desc: "Perfect for seasonal cleaning or move-ins/outs.",
    features: [
      "Everything in standard cleaning",
      "Carpet cleaning",
      "Window washing",
      "High dusting (e.g., ceiling fans)",
    ],
    button: "Get started",
    color: "bg-indigo-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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

const Pricing = () => {
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
              Our pricing plans
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-blue-100 leading-relaxed max-w-xl"
            >
              Our pricing plans are designed to offer flexibility and value, ensuring you receive the highest quality cleaning services at a fair price.
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
              src="/pricingImg.png"
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

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl shadow-lg p-8 text-center"
              >
                <h3 className="text-4xl font-bold text-gray-900">
                  {plan.price} <span className="text-sm">/ visit</span>
                </h3>

                <h4 className="text-xl font-semibold mt-4">
                  {plan.title}
                </h4>

                <p className="text-gray-500 mt-2">{plan.desc}</p>

                {/* Features */}
                <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                  {plan.features.map((item, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <span className="text-green-500">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`mt-8 px-6 py-3 rounded-xl text-white font-medium transition-all ${plan.color} hover:opacity-90`}
                >
                  {plan.button}
                </button>
              </motion.div>
            ))}
          </motion.div>
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
  )
}

export default Pricing