import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased pb-20">
      {/* Header */}
      <header className="bg-[#eaf2fb] py-20 text-center border-b border-gray-100">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-lg"
        >
          Last updated: September 9, 2024
        </motion.p>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 pt-16 space-y-16">
        
        {/* Collecting Personal Information */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Collecting Personal Information
          </h2>

          <p className="text-gray-600 leading-8 text-[17px] mb-6">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour,
            or non-characteristic words etc.
          </p>

          <ul className="space-y-4 text-gray-600 text-[17px] mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600">•</span>
              There are many variations of passages of Lorem Ipsum available.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">•</span>
              Iusto odio dignissimos ducimus qui blanditiis.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">•</span>
              Praesentium voluptatum deleniti atque.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">•</span>
              Quas molestias excepturi sint occaecati.
            </li>
          </ul>

          <p className="text-gray-600 leading-8 text-[17px]">
            The standard chunk of Lorem Ipsum used since the 1500s is
            reproduced below for those interested. Sections 1.10.32 and
            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
            reproduced in their exact original form, accompanied by English
            versions from the 1914 translation by H. Rackham.
          </p>
        </motion.section>

        {/* Sharing Personal Information */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Sharing Personal Information
          </h2>

          <p className="text-gray-600 leading-8 text-[17px] mb-6">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing
            hidden in the middle of text. All the Lorem Ipsum generators on
            the Internet tend to repeat predefined chunks as necessary,
            making this the first true generator on the Internet. It uses a
            dictionary of over 200 Latin words, combined with a handful of
            model sentence structures, to generate Lorem Ipsum which looks
            reasonable. The generated Lorem Ipsum is therefore always free
            from repetition, injected humour, or non-characteristic words
            etc.
          </p>

          <ul className="space-y-4 text-gray-600 text-[17px] mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600">•</span>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">•</span>
              Sometimes on purpose.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">•</span>
              Classical Latin literature from 45 BC.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">•</span>
              The Extremes of Good and Evil.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">•</span>
              This book is a treatise on the theory.
            </li>
          </ul>

          <p className="text-gray-600 leading-8 text-[17px]">
            Combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour,
            or non-characteristic words etc.
          </p>
        </motion.section>

      </main>
    </div>
  );
};

export default PrivacyPolicy;