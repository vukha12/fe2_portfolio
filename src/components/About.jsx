import { useEffect, useRef } from "react";
import { imageAbout } from "../constants";
import Myskills from "./cards/Myskills";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import gsap from "gsap";

const About = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, imageAbout.length);
  }, []);

  const handleMouseMove = (e, index) => {
    const el = imageRefs.current[index];
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;

    gsap.to(el, {
      rotateX,
      rotateY,
      scale: 1.05,
      transformPerspective: 800,
      transformOrigin: "center",
      ease: "power2.out",
      duration: 0.1,
    });
  };

  const handleMouseLeave = (index) => {
    const el = imageRefs.current[index];
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  return (
    <section id="about-me" className="mt-20">
      <div className="sm:mx-30 md:mx-40 md:px-8 px-5 flex flex-col h-[50vh]">
        <div className="text-center ">
          <h1 className="text-4xl  text-white ">About me</h1>
        </div>

        <div className=" lg:flex lg:gap-10 gap-5 mt-5">
          {/* Image */}
          <div className="lg:w-5/12">
            <div className="grid grid-cols-3 gap-5">
              {imageAbout.map((item, key) => (
                <div
                  key={key}
                  onMouseMove={(e) => handleMouseMove(e, key)}
                  onMouseLeave={() => handleMouseLeave(key)}
                  className="relative"
                >
                  <img
                    ref={(el) => (imageRefs.current[key] = el)}
                    src={item.imgPath}
                    alt={item.name}
                    className="rounded-xl shadow-2xl transition-all duration-300"
                    style={{
                      willChange: "transform",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Descript */}
          <div className="lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "linear" }}
              className="flex flex-col gap-6 text-1xl italic font-bold lg:mt-0 mt-5 h-full w-full item justify-center lg:items-start items-center"
            >
              <p> My name is Kha. </p>
              <p>
                I’m 23 years old and currently a final-year student at Thu Duc
                College of Technology. I have a strong passion for exploring new
                places.
              </p>
              <p>
                At the moment, I’m looking for an internship position to gain
                hands-on experience and better prepare myself for my future
                career.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Myskills />
    </section>
  );
};

export default About;
