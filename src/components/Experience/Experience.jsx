import React from "react";
import Heading from "../CommonHeading/Heading";
import { FcGraduationCap } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { experiences } from "../../data/data";

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-14">
      <Heading title="Career Story" />
      <div>
        <div>
          <h1 className="text-4xl md:text-5xl flex gap-4 font-extrabold font-stylish text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-wide transition-transform duration-300 text-shadow">
            <span className="inline-block group">
              <FaArrowRight className="text-white transform transition-transform duration-300 animate-moveRight" />
            </span>
            Education{" "}
            <span>
              <FcGraduationCap />
            </span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center mt-9 border-2">
          <div className="p-2 md:p-9">
            <h1 className="text-xl sm:text-5xl flex font-extrabold font-stylish text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-wide transition-transform duration-300 text-shadow lg:border-r-4 lg:pr-10 pb-0">
              BS Hons
            </h1>
          </div>
          <div className="p-2 md:p-9 gap-y-10">
            <p className="text-xl font-semibold mb-5">
              I completed my Bachelor’s in Software Engineering at the
              University of Gujrat, Pakistan, where I developed a strong
              foundation in software development and engineering principles.
            </p>
            <span className="text-2xl font-extrabold font-stylish text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-wide transition-transform duration-300 text-shadow">
              2018 – 2022
            </span>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div>
          <h1 className="text-4xl md:text-5xl flex gap-4 font-extrabold font-stylish text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-wide transition-transform duration-300 text-shadow">
            <span className="inline-block group">
              <FaArrowRight className="text-white transform transition-transform duration-300 animate-moveRight" />
            </span>
            Practical Experience{" "}
            <span>
              <MdOutlineWork className="text-gray-500" />
            </span>
          </h1>
        </div>
        <div>
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col lg:flex-row gap-4 mt-9 items-center border-2"
            >
              <div className="p-2 md:p-9">
                <h1 className="text-xl sm:text-5xl flex font-extrabold font-stylish text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-wide transition-transform duration-300 text-shadow lg:border-r-4 lg:pr-10 pb-0">
                  {experience.heading}
                </h1>
              </div>

              <div className="p-2 md:p-9 gap-y-10">
                <h1 className="flex items-center gap-2 text-orange-400 mb-5 text-xl md:text-3xl font-bold font-stylish">
                  <span className="text-orange-400">
                    <experience.icon />
                  </span>
                  {experience.title}
                </h1>
                <ul className="list-disc pl-5">
                  {experience.description.map((item, index) => (
                    <li key={index} className="text-xl font-semibold mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
