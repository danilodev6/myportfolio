import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Danilo",
          from_email: form.email,
          to_email: "danilodev6@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
      });
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.01,
      borderColor: "rgba(139, 92, 246, 0.6)",
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.08,
    },
    tap: { scale: 0.97 },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-clip-text text-transparent relative z-10"
      >
        <Navbar />
      </motion.div>

      <section className="bg-[#171720] min-h-dvh flex flex-col items-center justify-center text-white px-6 py-16 relative overflow-hidden">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold mb-10 mt-14 bg-gradient-to-r from-purple1 to-purple3 bg-clip-text text-transparent relative z-10 text-center"
        >
          Get in Touch
        </motion.h1>

        {/* Contact Form */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md p-8 rounded-xl backdrop-blur-sm bg-gray-800/20 shadow-xl relative z-10"
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="relative">
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="text"
                name="name"
                className="w-full p-3 bg-gray-900/40 text-white rounded-lg outline-none border border-gray-700/50 focus:border-purple-500 transition-all duration-300"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ width: "0%" }}
                whileFocus={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="relative">
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="email"
                name="email"
                className="w-full p-3 bg-gray-900/40 text-white rounded-lg outline-none border border-gray-700/50 focus:border-purple-500 transition-all duration-300"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ width: "0%" }}
                whileFocus={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="relative">
              <motion.textarea
                whileFocus="focus"
                variants={inputVariants}
                name="message"
                rows={5}
                className="w-full p-3 bg-gray-900/40 text-white rounded-lg outline-none border border-gray-700/50 focus:border-purple-500 transition-all duration-300"
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
                required
              />
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ width: "0%" }}
                whileFocus={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              type="submit"
              className="cursor-pointer bg-gradient-to-r from-purple1 to-purple3 mt-2 px-6 py-3 rounded-full text-white font-medium shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span className="ml-2">Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          className="mt-4 mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Footer />
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
