import React from "react";
import { skills, stats } from "../../data/data";
import ProgressBar from "@ramonak/react-progress-bar";
import Heading from "../CommonHeading/Heading";
import CountUp from "react-countup";
import BackgroundVideo from "../../assets/video.mp4";

const Skills = () => {
  return (
    <div className="relative z-20 container mx-auto px-4 py-14 overflow-hidden">
      <Heading title="Skills" />

      <div className="my-12">
        <div className="flex gap-y-20 flex-col md:flex-row items-center justify-evenly">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <span className="text-4xl font-bold">
                <CountUp
                  start={0}
                  end={stat.statNumber}
                  duration={3}
                  suffix={
                    stat.statNumber === 50 || stat.statNumber === 387
                      ? "+"
                      : stat.statNumber === 24
                      ? "/7"
                      : ""
                  }
                />
              </span>
              <h1 className="text-3xl font-normal">{stat.statName}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-14">
        {skills.map((skill) => (
          <div key={skill.id} className="mb-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-3">
              <skill.icon className="text-5xl hover:text-orange-400" />
              <span className="text-2xl">{skill.name}</span>
            </h2>
            <ProgressBar
              completed={skill.skillRange}
              animateOnRender={true}
              bgColor="#fb923c"
              labelColor="#000"
              transitionDuration="2s"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
