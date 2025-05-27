import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Myskills = () => {
  return (
    <div className="mt-5 mb-5 flex flex-col">
      <div className="text-center">
        <h1 className="text-4xl   text-white ">My Skill</h1>
      </div>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "linear" }}
        className="mt-5 sm:mx-30 md:mx-40 md:px-8 px-5 flex space-x-10 justify-center"
      >
        <motion.div
          className="flex justify-center items-center space-x-1.5"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <img src="/assets/skills/html-5.svg" alt="icon-html" width="40" />
          <p className="text-1xl font-semibold items-center flex">HTML</p>
        </motion.div>
        <motion.div
          className="flex justify-center items-center space-x-1.5"
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
        >
          <img src="/assets/skills/css-3.svg" alt="icon-html" width="40" />
          <p className="text-1xl font-semibold items-center flex">CSS</p>
        </motion.div>
        <motion.div
          className="flex justify-center items-center space-x-1.5"
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <img src="/assets/skills/laravel.svg" alt="icon-html" width="40" />
          <p className="text-1xl font-semibold items-center flex">Laravel</p>
        </motion.div>
        <motion.div
          className="flex justify-center items-center space-x-1.5"
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <img src="/assets/skills/react.svg" alt="icon-html" width="40" />
          <p className="text-1xl font-semibold items-center flex">React</p>
        </motion.div>
        <motion.div
          className="flex justify-center items-center space-x-1.5"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <img
            src="/assets/skills/tailwind-css.svg"
            alt="icon-html"
            width="40"
          />
          <p className="text-1xl font-semibold items-center flex">Tailwind</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Myskills;
