import { PROJECTS } from "../constants/index";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 0.5, 1, 0.5, 0, 1] }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                // times: [0, 0.2, 0.5, 0.8, 1, 0.5],
                delay: 0.5,
              }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <p>
                {project.technologies.map((item, index) => (
                  <span
                    key={index}
                    className="mr-2 bg-stone-900 p-2 text-sm font-medium text-stone-300 rounded"
                  >
                    {item}
                  </span>
                ))}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
