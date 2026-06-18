import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "/JaneDoe.png",
    name: "Jane Doe",
    location: "Jersey City, NJ",
    text: "The team did an outstanding job on my home. Everything was spotless, and their attention to detail was impressive.",
  },
  {
    id: 2,
    image: "/JohnSmith.png",
    name: "John Smith",
    location: "New York, NY",
    text: "We’ve used several cleaning services, but this one is by far the best. Reliable, efficient, and always leaves our office looking pristine.",
  },
  {
    id: 3,
    image: "/EmilyJohnson.png",
    name: "Emily Johnson",
    location: "Ridgefield, NJ",
    text: "I was thrilled with the move-out cleaning service. My landlord was impressed, and I got my full deposit back!",
  },
];

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

export default function OfficeCleaning() {

  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevCard = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-[#333333]">
      
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center pt-16 pb-12 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold tracking-tight mb-6"
          >
            Office Cleaning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Professional Office Cleaning. Keep your workspace spotless and
            productive with our thorough office cleaning services.
          </motion.p>
        </section>

        {/* Single Image Section */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl overflow-hidden shadow-lg h-[400px] md:h-[550px]"
          >
            <img
              src="/servicesCleaning.png"
              alt="Office Cleaning Service"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* Service Overview Section */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-6">
              We give the best services
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are committed to delivering exceptional cleaning services that exceed your expectations. Our experienced and professional staff utilizes state-of-the-art equipment and eco-friendly products to ensure a spotless environment. We offer customizable cleaning plans tailored to your specific needs, whether for a workspace or home.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our attention to detail and dedication to customer satisfaction guarantee that you receive the highest quality service every time. Trust us to create a clean, healthy, and inviting space for you and your team.
            </p>
          </div>

          <h3 className="text-4xl font-bold text-[#222] mb-6">
            Service Overview
          </h3>

          <p className="text-gray-600 text-lg mb-12">
            We offer a comprehensive range of cleaning services designed to meet the diverse needs of our clients. Our services include regular office cleaning, deep cleaning, and specialized cleaning for carpets, windows, and upholstery.
          </p>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {[
                {
                  title: "General cleaning",
                  desc: "Dusting, vacuuming, and mopping of all common areas, workstations, and reception areas.",
                },
                {
                  title: "Trash removal",
                  desc: "Emptying trash bins and replacing liners to keep your office clean and odor-free.",
                },
                {
                  title: "Surface disinfection",
                  desc: "Wiping down and disinfecting high-touch surfaces such as desks, keyboards, doorknobs, and light switches to reduce the spread of germs.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-bold text-xl text-[#222]">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src="/ServicesCleaning2.png"
                alt="Cleaning Team"
                className="w-full h-[450px] object-cover"
              />
            </motion.div>

          </div>
        </section>

      </div>

      <section className="bg-[#eaf2fb] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-16">
            Testimonials
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div>
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-full max-w-md rounded-3xl object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <div className="flex gap-2 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={22}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-12">
                  {testimonials[index].text}
                </h3>

                <div className="mb-8">
                  <h4 className="font-bold text-xl">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-gray-500">
                    {testimonials[index].location}
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={prevCard}
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:scale-105 transition"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    onClick={nextCard}
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:scale-105 transition"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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
}