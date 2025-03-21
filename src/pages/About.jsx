import React from "react";
import CTA from "../components/CTA.jsx";
import { motion } from "framer-motion";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants/index.js";
import Navbar from "../components/NavBar.jsx";

const About = () => {
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-clip-text text-transparent relative z-10"
          >
            <h1 className="text-4xl font-medium text-left text-white">
              Hello, I'm{" "}
              <span className="text-5xl font-semibold bg-gradient-to-r from-purple1 to-purple3 bg-clip-text text-transparent drop-shadow">
                Danilo
              </span>
            </h1>

            {/* About Text */}
            <div className="mt-8 text-gray-300 leading-relaxed space-y-4">
              <p>
                An enthusiastic developer specializing in both front-end and
                back-end development. I build responsive, interactive, and
                scalable applications with a passion for learning new
                technologies and applying them to real-world projects.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new tech, traveling, and
                tackling creative problem-solving challenges. I'm always open to
                collaborating with like-minded people who share my passion for
                innovation.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-16 bg-clip-text text-transparent relative z-10"
          >
            <h3 className="text-2xl font-semibold text-purple3 text-left">
              My Skills
            </h3>
            <div className="mt-16 flex justify-center flex-wrap gap-10">
              {skills.map((skill) => (
                <div className="block-container w-20 h-20" key={skill.name}>
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front2 rounded-xl flex justify-center items-center">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience Section */}
          {/* <div className="mt-20"> */}
          {/*   <motion.div */}
          {/*     initial={{ opacity: 0, y: 50 }} */}
          {/*     animate={{ opacity: 1, y: 0 }} */}
          {/*     transition={{ duration: 0.8, ease: "easeOut" }} */}
          {/*     className="mt-16 bg-clip-text text-transparent relative z-10" */}
          {/*   > */}
          {/*     <h3 className="text-2xl font-semibold text-purple3 text-left"> */}
          {/*       Work Experience */}
          {/*     </h3> */}
          {/*   </motion.div> */}
          {/*   <div className="mt-12"> */}
          {/*     <VerticalTimeline> */}
          {/*       {experiences.map((experience) => ( */}
          {/*         <VerticalTimelineElement */}
          {/*           key={experience.company_name} */}
          {/*           date={experience.date} */}
          {/*           icon={ */}
          {/*             <div className="flex justify-center items-center w-full h-full bg-gray-700 rounded-full"> */}
          {/*               <img */}
          {/*                 src={experience.icon} */}
          {/*                 alt={experience.company_name} */}
          {/*                 className="w-10 h-10 object-contain" */}
          {/*               /> */}
          {/*             </div> */}
          {/*           } */}
          {/*           iconStyle={{ background: experience.iconBg }} */}
          {/*           contentStyle={{ */}
          {/*             borderBottom: "8px", */}
          {/*             borderStyle: "solid", */}
          {/*             borderBottomColor: experience.iconBg, */}
          {/*             boxShadow: "none", */}
          {/*           }} */}
          {/*           contentArrowStyle={{ borderRight: "7px solid #292A36" }} */}
          {/*         > */}
          {/*           <h3 className="text-lg font-semibold"> */}
          {/*             {experience.title} */}
          {/*           </h3> */}
          {/*           <p className="text-gray-400">{experience.company_name}</p> */}
          {/*           <ul className="mt-4 list-disc ml-4 space-y-2 text-gray-400"> */}
          {/*             {experience.points.map((point, index) => ( */}
          {/*               <li */}
          {/*                 key={`experience-point-${index}`} */}
          {/*                 className="text-sm" */}
          {/*               > */}
          {/*                 {point} */}
          {/*               </li> */}
          {/*             ))} */}
          {/*           </ul> */}
          {/*         </VerticalTimelineElement> */}
          {/*       ))} */}
          {/*     </VerticalTimeline> */}
          {/*   </div> */}
          {/* </div> */}
          {/* <hr className="border-slate-400 mt-12" /> */}

          {/* CTA */}
          {/* <CTA /> */}
        </div>
      </section>
    </>
  );
};

export default About;
