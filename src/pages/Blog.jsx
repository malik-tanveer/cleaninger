import { motion } from "framer-motion";

const blogs = [
  {
    image: "/blog1.jpg",
    category: "Kitchen Cleaning",
    date: "December 10, 2024",
    title: "The science behind effective kitchen sanitization",
  },
  {
    image: "/blog2.png",
    category: "Upholstery Cleaning",
    date: "December 10, 2024",
    title: "A beginner's guide to upholstery maintenance",
  },
  {
    image: "/blog3.png",
    category: "Office Cleaning",
    date: "December 10, 2024",
    title: "The importance of regular office cleaning",
  },
  {
    image: "/blog4.png",
    category: "Window Cleaning",
    date: "December 10, 2024",
    title: "Window cleaning hacks for a streak-free shine",
  },
  {
    image: "/blog5.png",
    category: "Window Cleaning",
    date: "December 10, 2024",
    title: "Tips for high-rise cleaners",
  },
  {
    image: "/blog6.png",
    category: "Kitchen Cleaning",
    date: "December 10, 2024",
    title: "The role of professional cleaners in food safety",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function BlogSection() {
  return (
    <>
      <header className="bg-[#eaf2fb] py-20 text-center border-b border-gray-100">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          Blog
        </motion.h1>
      </header>

      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-3xl">
                  <motion.img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[280px] object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mt-5 flex-wrap">
                  <span className="bg-yellow-400 text-black text-sm px-4 py-1 rounded-full font-medium">
                    {blog.category}
                  </span>

                  <span className="text-gray-700 text-lg">
                    {blog.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-3xl font-bold text-gray-900 leading-snug group-hover:text-[#3b44f6] transition-colors">
                  {blog.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
    
  );
}