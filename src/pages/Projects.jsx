import React from "react";
import { projects } from "../constants/index.js";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import Navbar from "../components/NavBar.jsx";
import { motion } from "framer-motion";

const Projects = () => {
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
      <section className="bg-[#171720] min-h-screen text-white py-16 px-6">
        <div className="max-w-5xl mx-auto mt-24">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-clip-text text-transparent relative z-10"
          >
            <h1 className="text-4xl font-medium text-left text-white">
              My{" "}
              <span className="text-5xl font-semibold bg-gradient-to-r from-purple1 to-purple3 bg-clip-text text-transparent drop-shadow">
                Projects
              </span>
            </h1>
            <div className="mt-8 text-gray-300 leading-relaxed space-y-4">
              <p>
                I've worked on many projects over the years, but these are my
                favorites. Many are open-source—feel free to explore the code
                and contribute your ideas!
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-16 bg-clip-text text-transparent relative z-10"
          >
            <div className="flex flex-wrap my-14 gap-12">
              {projects.map((project) => (
                <div className="lg:w-[400px] w-full" key={project.name}>
                  <div className="block-container w-12 h-12">
                    <div className={`btn-back rounded-xl ${project.theme}`} />
                    <div className="btn-front rounded-xl flex justify-center items-center">
                      <img
                        src={project.iconUrl}
                        alt="Project Icon"
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col">
                    <h4 className="text-xl font-semibold text-white">
                      {project.name}
                    </h4>
                    <p className="mt-2 text-slate-400">{project.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Link
                        to={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-purple3"
                      >
                        {" "}
                        Code Link
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <hr className="border-slate-200" />

          <CTA />
        </div>
      </section>
    </>
  );
};

export default Projects;
