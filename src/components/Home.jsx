import Home3D from "../models/Home3D";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="pt-20">
      <div className="sm:mx-30 md:mx-40 md:px-8 px-5 flex flex-col">
        {/* Text */}
        <div className="text-center md:text-9xl text-6xl font-serif text-wrap tracking-wide">
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's make
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="italic"
          >
            it move.
          </motion.p>
        </div>

        {/* 3D */}
        <figure>
          <div className="relative mt-10 h-[60vh]">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full h-full bg-navbar-3d z-0 absolute  left-1/2 transform -translate-x-1/2 -top-2 "
            ></motion.div>
            <Home3D className="absolute z-50 w-full h-full" />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Home;
