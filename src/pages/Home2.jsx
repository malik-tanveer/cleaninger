import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import iconic from "/iconic.png";
import wayline from "/wayline.png";
import visualy from "/visualy.png";
import optimal from "/optimal.png";
import emblem from "/emblem.png";

import { CalendarCheck, MailCheck, CalendarDays } from 'lucide-react'; 

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Phone } from "lucide-react";

const Hero = () => {
  const logos = [optimal, visualy, wayline, iconic, emblem];

  const services = [
  {
    title: "Office cleaning",
    description:
      "Designed to maintain a pristine and productive workspace, tailored to your business needs.",
    image: "/officeCleaning.png",
  },
  {
    title: "Window cleaning",
    description:
      "Crystal-clear window cleaning services that brighten your view and enhance the appearance of your property.",
    image: "/windowCleaning.png",
  },
  {
    title: "Bedroom cleaning",
    description:
      "Thorough bedroom cleaning that ensures a tidy, dust-free, and relaxing environment for your rest.",
    image: "/bedroomCleaning.png",
  },
];
      
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const steps = [
  {
    icon: <CalendarCheck size={48} className="text-white" />,
    title: "Book online form",
    description: "Easily schedule your cleaning service with our online form. Select your preferred date."
  },
  {
    icon: <MailCheck size={48} className="text-white" />,
    title: "Get confirmation",
    description: "Receive prompt confirmation of your booking. We'll quickly verify your appointment details."
  },
  {
    icon: <CalendarDays size={48} className="text-white" />,
    title: "Set your schedule",
    description: "Enjoy the flexibility of scheduling your cleaning services at your convenience."
  }
];

const testimonials = [
  {
    id: 1,
    image:
      "/JaneDoe.png",
    name: "Jane Doe",
    location: "Jersey City, NJ",
    text: "The team did an outstanding job on my home. Everything was spotless, and their attention to detail was impressive.",
  },
  {
    id: 2,
    image:
      "JohnSmith.png",
    name: "John Smith",
    location: "New York, NY",
    text: "We’ve used several cleaning services, but this one is by far the best. Reliable, efficient, and always leaves our office looking pristine.    ",
  },
  {
    id: 3,
    image:
      "EmilyJohnson.png",
    name: "Emily Johnson",
    location: "Ridgefield, NJ",
    text: "I was thrilled with the move-out cleaning service. My landlord was impressed, and I got my full deposit back!",
  },
];

const [index, setIndex] = useState(0);

const nextCard = () => {
  setIndex((prev) => (prev + 1) % testimonials.length);
};

const prevCard = () => {
  setIndex((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
};


const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  service: Yup.string().required("Please select a service"),
  location: Yup.string().required("Location is required"),
  date: Yup.string().required("Date is required"),
});

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    date: "",
  };

  
const handleSubmit = (values, { resetForm }) => {
  console.log(values);

  alert("Form Submitted Successfully!");

  resetForm();
};


  return (
    <>
      <section className="px-6 md:px-12 py-8 bg-[#dce7f1]">
        <div className="grid lg:grid-cols-[1fr_1fr] overflow-hidden rounded-3xl">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[650px]"
          >
            <img
              src="/cleaning-hero.png"
              alt="Cleaning Service"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#3f3cff] text-white flex flex-col justify-center px-8 md:px-14 py-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
            >
              Premium cleaning
              <br />
              services at every
              <br />
              visit
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 text-lg text-gray-100 max-w-lg"
            >
              We are committed to delivering premium cleaning services at
              every visit. Our team of highly trained professionals uses
              advanced cleaning techniques and high quality standards.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 flex items-center gap-3 bg-yellow-400 text-black font-semibold px-6 py-4 rounded-xl w-fit"
            >
              Book now

              <span className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                →
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Logo Marquee */}
        <div className="mt-12 overflow-hidden">
          <motion.div
            className="flex items-center gap-24 w-max"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="logo"
                className="h-10 md:h-12 object-contain grayscale brightness-0"
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-[#f5f5f5]">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold"
          >
            Our services
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-400 px-8 py-4 rounded-xl font-semibold mt-6 md:mt-0"
          >
            View all services
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="space-y-10">
            {[services[0], services[1]].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 rounded-3xl overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[370px] object-cover"
                />

                <div className="bg-[#dce7f1] p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-bold mb-6">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <button className="mt-8 bg-yellow-400 w-12 h-12 rounded-lg text-xl font-bold">
                    →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
          >
            <img
              src={services[2].image}
              alt={services[2].title}
              className="w-full h-[420px] object-cover"
            />

            <div className="bg-[#dce7f1] p-8">
              <h3 className="text-4xl font-bold mb-6">
                {services[2].title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                {services[2].description}
              </p>

              <button className="mt-8 bg-yellow-400 w-12 h-12 rounded-lg text-xl font-bold">
                →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-center text-black mb-6"
          >
            How we work
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed mb-20"
          >
            Our team follows a meticulous and efficient process to ensure
            exceptional results. From initial consultation to final inspection,
            we prioritize quality and attention to detail at every step.
          </motion.p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-12 relative">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="text-center flex flex-col items-center relative"
              >

                {/* Line Between Cards */}
                {index !== 2 && (
                  <div className="hidden md:block absolute top-16 -right-6 w-12 h-[2px] bg-gray-300"></div>
                )}

                {/* Icon Box */}
                <div className="w-36 h-36 bg-[#3f3cff] rounded-3xl flex items-center justify-center shadow-xl mb-8">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-black mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed max-w-xs">
                  {step.description}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

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

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl">

            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/request-service.png"
                alt="Cleaning"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#dce7f1] p-8 lg:p-12"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl font-bold mb-10"
              >
                Request a service
              </motion.h2>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="space-y-5">

                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="font-semibold block mb-2">
                      Name
                    </label>

                    <Field
                      name="name"
                      placeholder="Dennis barrett"
                      className="w-full p-4 rounded-lg bg-white outline-none"
                    />

                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="font-semibold block mb-2">
                      Email
                    </label>

                    <Field
                      name="email"
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full p-4 rounded-lg bg-white outline-none"
                    />

                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </motion.div>

                  {/* Phone + Service */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-5"
                  >
                    <div>
                      <label className="font-semibold block mb-2">
                        Phone
                      </label>

                      <Field
                        name="phone"
                        placeholder="+1234567890"
                        className="w-full p-4 rounded-lg bg-white outline-none"
                      />

                      <ErrorMessage
                        name="phone"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label className="font-semibold block mb-2">
                        Select service
                      </label>

                      <Field
                        as="select"
                        name="service"
                        className="w-full p-4 rounded-lg bg-white outline-none"
                      >
                        <option value="">Select service</option>
                        <option value="office">Office Cleaning</option>
                        <option value="window">Window Cleaning</option>
                        <option value="bedroom">Bedroom Cleaning</option>
                      </Field>

                      <ErrorMessage
                        name="service"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </motion.div>

                  {/* Location + Date */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-5"
                  >
                    <div>
                      <label className="font-semibold block mb-2">
                        Location
                      </label>

                      <Field
                        name="location"
                        placeholder="Los Angeles"
                        className="w-full p-4 rounded-lg bg-white outline-none"
                      />

                      <ErrorMessage
                        name="location"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label className="font-semibold block mb-2">
                        Date
                      </label>

                      <Field
                        type="date"
                        name="date"
                        className="w-full p-4 rounded-lg bg-white outline-none"
                      />

                      <ErrorMessage
                        name="date"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </motion.div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-yellow-400 py-4 rounded-lg font-bold text-lg"
                  >
                    Submit
                  </motion.button>

                  {/* Call Us */}
                  <div className="text-center pt-8">
                    <p className="text-gray-500 mb-5">OR</p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center gap-3 text-[#3f3cff] font-bold text-2xl"
                    >
                      <Phone size={28} />

                      <span className="hover:underline cursor-pointer">
                        Call us on +1 (234) 567-8901
                      </span>
                    </motion.div>
                  </div>

                </Form>
              </Formik>
            </motion.div>
          </div>
        </div>
      </motion.section>

    </>
  );

};

export default Hero;