import React, { useState } from "react";
import Heading from "../CommonHeading/Heading";
import GitHubCalendar from "react-github-calendar";
import BabyImage from "../../assets/baby.png";
import { FaArrowRight } from "react-icons/fa";
import { websiteDetail } from "../../data/data";

const Projects = () => { 
  return (
    <div className="container mx-auto px-4 py-14">
      <Heading title="Portfolio" />

      <div className="flex justify-center mb-10">
        <GitHubCalendar
          username="hussnaincheema"
          blockSize={22}
          blockMargin={5}
          color="#4CAF50"
          fontSize={16}
        />
      </div>

      <div className="my-20">
        <div>
          <h1 className="text-4xl md:text-5xl flex gap-4 font-extrabold font-stylish text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-wide transition-transform duration-300 text-shadow">
            <span className="inline-block group">
              <FaArrowRight className="text-white transform transition-transform duration-300 animate-moveRight" />
            </span>
            Websites ShowCase{" "}
          </h1>
        </div>
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col max-w-[90%] mx-auto gap-y-16">
            {websiteDetail.map((site) => (
              <div key={site.id} className="flex flex-col xl:flex-row gap-y-4">
                <div className="flex-1">
                  <img
                    src={site.image}
                    alt="Project Screenshot"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 pl-3">
                  <p className="text-white mb-4 text-xl">{site.desc}</p>

                  <div className="flex flex-wrap justify-center items-center gap-5">
                    {site.hint.map((sitehint, index) => (
                      <span
                        key={index}
                        className={`border-2 p-2 rounded-md hover:bg-orange-400 hover:text-white hover:border-0 hover:font-bold text-center whitespace-nowrap border-gray-400`}
                      >
                        {sitehint}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-5 sm:justify-center items-center pt-5">
                    {site.buttons.map((button, index) => (
                      <a
                        key={index}
                        href={button.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 ${
                          button.name === "Live Preview"
                            ? "bg-orange-400 hover:bg-gray-800"
                            : "bg-gray-800"
                        } text-white rounded-md`}
                      >
                        {button.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
