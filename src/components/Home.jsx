import React from "react";
import pic from "../../public/vecteezy_developer-png-with-ai-generated_29711176.png";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { GrResume } from "react-icons/gr";

import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to My portfolio!</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              passionate MERN stack developer with a knack for building robust
              web applications. With a foundation in Mechanical Engineering and
              specialized training in full-stack development from GUVI, IIT
              Madras, I bring a unique perspective to software engineering. My
              journey has led me to create dynamic applications using MongoDB,
              Express.js, React.js, and Node.js. I excel in crafting secure
              JWT-based authentication systems, real-time features with
              Socket.io, and responsive UI/UX designs. Currently, I'm diving
              deeper into integrating Redux for enhanced state management and
              exploring GraphQL for efficient data fetching. Explore my projects
              below and connect with me on LinkedIn or GitHub for collaborations
              and exciting opportunities.
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://github.com/SunilSurendran1906"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sunil-surendran-703468276"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1NnWf3_HfcjyeJ6dohgeFZbSjFduWAfj8/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrResume className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1jg_Zdz8Oo2BGSVALqqcBfLOQUGwmdmpx/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PiCertificateFill className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt="Developer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
