import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "../../assets/hussnain.png";
import { Link } from "react-router-dom";
import { socialAccounts } from "../../data/data";

const Hello = () => {
  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-col-reverse pt-32 sm:pt-20 lg:pt-0 justify-center gap-y-10 lg:flex-row lg:justify-evenly items-center h-screen px-10">
        <div className="font-poppins italic w-full sm:w-2/3 lg:w-1/2">
          <h4 className="text-lg md:text-xl font-bold text-orange-400 tracking-wide leading-relaxed mb-2 flex lg:justify-start justify-center">
            &lt;Software Developer /&gt;
          </h4>
          <p className="text-sm md:text-lg lg:text-2xl leading-relaxed flex lg:justify-start justify-center">
            <span className="text-sm md:text-lg lg:text-2xl text-gray-300 mr-2">
              1.
            </span>
            Hi, my name is&nbsp;
            <span className="text-green-400 font-bold text-sm md:text-lg lg:text-2xl">
              Hussnain{" "}
            </span>{" "}
            <span className="text-pink-400">( ) {"{"}</span>
          </p>
          <p className="text-sm md:text-lg lg:text-2xl leading-relaxed flex lg:justify-start justify-center">
            <span className="text-sm md:text-lg lg:text-2xl text-gray-300 mr-2">
              2.
            </span>
            I am a&nbsp;{" "}
            <span className="text-pink-700 font-bold">
              <Typewriter
                words={["Frontend Developer", "Web Developer", "App Developer"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </p>
          <p className="text-sm md:text-lg lg:text-2xl leading-relaxed flex lg:justify-start justify-center flex-wrap">
            <span className="text-sm md:text-lg lg:text-2xl text-gray-300 mr-2">
              3.
            </span>
            I have done more than&nbsp;{" "}
            <span className="text-pink-700">50 Projects</span>{" "}
          </p>
          <p className="text-sm md:text-lg lg:text-2xl leading-relaxed flex lg:justify-start justify-center">
            <span className="text-sm md:text-lg lg:text-2xl text-gray-300 mr-2">
              4.
            </span>
            using&nbsp;{" "}
            <span className="text-red-500">modern technologies</span>
          </p>
          <p className="text-sm md:text-lg lg:text-2xl leading-relaxed flex lg:justify-start justify-center">
            <span className="text-sm md:text-lg lg:text-2xl text-gray-300 mr-2">
              5.
            </span>
            and&nbsp; <span className="text-blue-600">designs</span>
          </p>
          <p className="text-sm md:text-lg lg:text-2xl leading-relaxed flex lg:justify-start justify-center">
            <span className="text-pink-400 ml-6">{"}"}</span>
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-y-4 gap-x-5 lg:justify-start justify-center items-center">
            <a
              href="/Hussnain's CV.pdf"
              download="Hussnain-CV.pdf"
              className="px-4 py-2 bg-orange-400 hover:bg-gray-800 text-white rounded-md inline-flex justify-center"
            >
              Download CV
            </a>

            <Link
              to="/contact"
              className="px-5 py-2 bg-gray-800 text-white rounded-md inline-flex justify-center"
            >
              Get In Touch
            </Link>
          </div>

          <div className="mt-10 mb-16 lg:mb-0 flex justify-center lg:justify-start gap-x-7">
            {socialAccounts.map((account) => (
              <a
                key={account.id}
                target="_blank"
                rel="noopener noreferrer"
                href={account.href}
              >
                <account.icon className="text-3xl hover:text-orange-400" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img
            src={Image}
            alt="Hussnain Image"
            className="w-60 h-60 lg:w-96 lg:h-96 rounded-full border-8 border-gray-500 object-cover mb-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hello;
