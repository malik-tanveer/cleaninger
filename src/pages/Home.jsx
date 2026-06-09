import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import emblem from "/emblem.png"
import iconic from "/iconic.png"
import logique from "/logique.png"
import optimal from "/optimal.png"
import visualy from "/visualy.png"
import wayline from "/wayline.png"

import img2 from "/img2.avif";


function Hero() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      location: "",
      date: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      service: Yup.string().required("Select a service"),
      location: Yup.string().required("Location is required"),
      date: Yup.string().required("Date is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert("Form submitted successfully!");
      resetForm();
    },
  });

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const logos = [emblem, iconic, logique, optimal, visualy, wayline];

  const stats = [
    {
      number: "300+",
      title: "Projects completed",
      desc: "Over 300+ successful projects delivered with precision and care.",
    },
    {
      number: "50+",
      title: "Professional cleaners",
      desc: "Dedicated to delivering spotless results every time.",
    },
    {
      number: "98%",
      title: "Client retention rate",
      desc: "Client retention, reflecting quality and satisfaction.",
    },
  ];

  const [activeService, setActiveService] = React.useState(0);

  const services = [
    {
      title: "Office cleaning",
      desc: "Designed to maintain a pristine & productive workspace, tailored to your business needs.",
      icon: "/iconImg1.png",
    },
    {
      title: "Window cleaning",
      desc: "Crystal-clear window cleaning services that brighten your view of your property.",
      icon: "/iconImg2.png",
    },
    {
      title: "Carpet cleaning",
      desc: "Removes dirt, stains, and allergens, leaving your carpets fresh and revitalized.",
      icon: "/iconImg3.png",
    },
    {
      title: "Bedroom cleaning",
      desc: "Ensures a tidy, dust free and relaxing environment for your rest.",
      icon: "/iconImg4.png",
    },
  ];
  
  const testimonialsData = [
    {
      id: 1,
      stars: 5,
      text: "The team did an outstanding job on my home. Everything was spotless, and their attention to detail was impressive.",
      name: "Jane Doe",
      location: "Jersey City, NJ",
      img: "/jane.png",
    },
    {
      id: 2,
      stars: 5,
      text: "We’ve used several cleaning services, but this one is by far the best. Reliable, efficient, and always leave our office looking pristine.",
      name: "John Smith",
      location: "New York, NY",
      img: "/john.png",
    },
    {
      id: 3,
      stars: 5,
      text: "I was thrilled with the move-out cleaning service. My landlord was impressed, and I got my full deposit back!",
      name: "Emily Johnson",
      location: "Ridgefield, NJ",
      img: "/emily.png",
    },
    {
      id: 4,
      stars: 5,
      text: "The cleaning team was fantastic! My home has never looked this clean. Their thoroughness and eye for detail were truly impressive.",
      name: "Emily Brown",
      location: "Jersey City, NJ",
      img: "/brown.png",
    },
    {
      id: 5,
      stars: 5,
      text: "I was blown away by the cleaning crew's work. Every inch of my home was pristine, and their commitment to detail was remarkable.",
      name: "Mike Johnson",
      location: "New York, NY",
      img: "/malik.png",
    },
  ];
  
  const pricingPlans = [
    {
      id: 1,
      price: "$19",
      title: "Basic cleaning package",
      description: "Ideal for regular maintenance of your home or office.",
      features: [
        "Dusting",
        "Vacuuming",
        "Sweeping and mopping",
        "Surface cleaning"
      ],
      isPopular: false
    },
    {
      id: 2,
      price: "$59",
      title: "Standard cleaning package",
      description: "Includes all services in the Basic package plus additional services.",
      features: [
        "Everything in basic cleaning",
        "Bathroom scrubbing",
        "Kitchen appliance cleaning",
        "Baseboard and trim cleaning"
      ],
      isPopular: true // Center card with different styling
    },
    
    {
      id: 3,
      price: "$119",
      title: "Deep cleaning package",
      description: "Perfect for seasonal cleaning or move-ins/outs.",
      features: [
        "Everything in standard cleaning",
        "Carpet cleaning",
        "Window washing",
        "High dusting (e.g., ceiling fans)"
      ],
      isPopular: false
    }
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
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const blogPosts = [
    {
      id: 1,
      image: '/blog1.jpg', 
      category: 'Kitchen Cleaning',
      date: 'December 10, 2024',
      title: 'The science behind effective kitchen sanitization'
    },
    {
      id: 2,
      image: '/blog2.png',
      category: 'Upholstery Cleaning',
      date: 'December 10, 2024',
      title: 'A beginner’s guide to upholstery maintenance'
    },
    {
      id: 3,
      image: '/blog3.png',
      category: 'Office Cleaning',
      date: 'December 10, 2024',
      title: 'The importance of regular office cleaning'
    }
  ];

 const containeVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

  return (

    <>
      <motion.section
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2000')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              className="text-white"
            >
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              >
                Quality cleaning
                <br />
                service
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg text-gray-200 max-w-xl"
              >
                Experience top-notch cleaning services that cater to both
                residential and commercial needs. Our skilled professionals
                deliver consistent, high-quality results every time.
              </motion.p>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl max-w-xl ml-auto"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Request a service
              </h2>

              <motion.form
                onSubmit={formik.handleSubmit}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-5"
              >
                {/* Name */}
                <motion.div variants={fadeUp}>
                  <label className="font-semibold block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Dennis Barrett"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full bg-gray-100 p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeUp}>
                  <label className="font-semibold block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full bg-gray-100 p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div variants={fadeUp}>
                    <label className="font-semibold block mb-2">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+1234567890"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-gray-100 p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="font-semibold block mb-2">
                      Select Service
                    </label>
                    <select
                      name="service"
                      value={formik.values.service}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-gray-100 p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select service</option>
                      <option value="Home Cleaning">Home Cleaning</option>
                      <option value="Office Cleaning">Office Cleaning</option>
                      <option value="Deep Cleaning">Deep Cleaning</option>
                    </select>
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div variants={fadeUp}>
                    <label className="font-semibold block mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Los Angeles"
                      value={formik.values.location}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-gray-100 p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="font-semibold block mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-gray-100 p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold"
                >
                  Submit Request →
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Clients Logos */}
          <section className="bg-[#111] py-8 overflow-hidden -mt-20 relative z-20">
            <motion.div
              className="flex gap-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="logo"
                  className="h-12 object-contain"
                />
              ))}
            </motion.div>
          </section>
          <div className="grid lg:grid-cols-2 mt-20 gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900">
                We are a dedicated cleaning company providing top-quality services to
                our clients
              </h2>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Our company is committed to delivering top-quality services to our
                clients and we are an experienced team specializing in both
                residential and commercial cleaning.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center overflow-hidden rounded-xl bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 group"
              >
                <span className="px-8 py-4 font-semibold text-lg">
                  More About
                </span>

                <span className="bg-white px-5 py-4 text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={img2}
                alt="Cleaning Service"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Stats Cards */}
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-[#dfeaf5] rounded-3xl p-8 min-h-[340px] flex flex-col justify-between"
              >
                <h2 className="text-6xl font-bold text-blue-600">
                  {item.number}
                </h2>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Heading */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left">
              Our services
            </h2>

            <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold w-full md:w-auto">
              View all services
            </button>
          </div>

          {/* LIST */}
          <div className="bg-white rounded-3xl p-5 md:p-8">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveService(index)}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center py-8 md:py-10 border-b cursor-pointer"
              >
                {/* LEFT (ICON + TITLE) */}
                <div className="flex items-center gap-4">
                  {/* ICON */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className={`text-xl md:text-2xl font-semibold transition ${
                      activeService === index
                        ? "text-blue-600"
                        : "text-black"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  {service.desc}
                </p>

                {/* ARROW */}
                <div className="flex justify-start md:justify-end">
                  <button
                    className={`w-11 h-11 md:w-12 md:h-12 rounded-md flex items-center justify-center transition ${
                      activeService === index
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-black"
                    }`}
                  >
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    <section className="bg-[#eef5fc] py-16 px-4 min-h-screen flex flex-col justify-center items-center">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#1e293b] text-center mb-12 tracking-tight">
        Hear from our happy clients
      </h2>

      {/* Responsive Cards Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((client) => (
          <div 
            key={client.id} 
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border border-slate-100"
          >
            {/* Stars & Text Container */}
            <div>
              {/* Star Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(client.stars)].map((_, i) => (
                  <span key={i} className="text-xl text-amber-400">★</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6 font-medium">
                {client.text}
              </p>
            </div>

            {/* Client Profile */}
            <div className="flex items-center gap-3 mt-auto">
              <img 
                src={client.img} 
                alt={client.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-slate-800 text-[15px] leading-tight">
                  {client.name}
                </h4>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  {client.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <motion.section
      className="py-16 px-4 min-h-screen flex flex-col justify-center items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-[#1e293b] text-center mb-16 tracking-tight"
      >
        Our pricing
      </motion.h2>

      {/* Pricing Cards Grid */}
      <motion.div
        variants={containerVariants}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
      >
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.id}
            variants={cardVariants}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className={`p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
              plan.isPopular
                ? "bg-[#3b42ff] text-white shadow-xl md:scale-105 z-10"
                : "bg-[#eef5fc] text-slate-800 shadow-sm border border-slate-100"
            }`}
          >
            {/* Upper Content */}
            <div>
              {/* Price */}
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-black tracking-tight">
                  {plan.price}
                </span>

                <span
                  className={`text-sm font-semibold ml-2 ${
                    plan.isPopular
                      ? "text-blue-100"
                      : "text-slate-500"
                  }`}
                >
                  / visit
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                {plan.title}
              </h3>

              <p
                className={`text-[15px] font-medium leading-relaxed mb-8 ${
                  plan.isPopular
                    ? "text-blue-100"
                    : "text-slate-400"
                }`}
              >
                {plan.description}
              </p>

              {/* Features List */}
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-4">
                  Includes:
                </h4>

                <ul className="space-y-3.5">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.08,
                        duration: 0.4,
                      }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-[15px] font-medium"
                    >
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 p-0.5 rounded-full ${
                          plan.isPopular
                            ? "bg-blue-500/30 text-white"
                            : "bg-blue-50 text-blue-600"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-4 rounded-xl font-bold text-[15px] tracking-wide mt-auto ${
                plan.isPopular
                  ? "bg-[#ffd200] text-slate-900 hover:bg-[#e6bd00]"
                  : "bg-[#3b42ff] text-white hover:bg-[#2a30d9]"
              }`}
            >
              Get started
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>


    <section className="bg-[#EBF4FA] py-16 px-6 md:px-16 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111]">
            Our blog
          </h2>

          <button className="bg-[#FFCC00] hover:bg-[#E6B800] text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm">
            View all blogs
          </button>
        </div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariant}
              whileHover={{ y: -8 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl mb-4 bg-gray-200 aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-3 text-sm">
                <span className="bg-[#FFCC00] text-black font-semibold px-3 py-1 rounded-md text-xs whitespace-nowrap">
                  {post.category}
                </span>

                <span className="text-gray-500 font-medium">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#111111] leading-snug group-hover:text-amber-600 transition-colors duration-200">
                {post.title}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>



    </>
  );
}

export default Hero;