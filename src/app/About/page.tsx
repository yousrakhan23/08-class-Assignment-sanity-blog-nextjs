import React from "react";
import Image from "next/image";
import Link from "next/link";
import myProfile from "../../../public/images/mine.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const About = () => {
    return (
      <section className="text-slate-900 body-font overflow-hidden bg-[#df4861] ">
        <div className="container mx-auto px-5 py-24">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between space-y-10 lg:space-y-0 lg:space-x-10">
            {/* Image Section */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
              <div className="relative group">
                <Image
                  src={myProfile}
                  alt="my profile"
                  height={100}
                  width={250}
                  className="rounded-full shadow-xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-purple-500 opacity-20 rounded-full"></div>
              </div>
            </div>
  
            {/* Text Section */}
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h1
                className="text-5xl font-serif font-bold text-[#F2AE66] cursor-pointer transition-colors duration-500" 
              >
                About Me
              </h1>
              <h2 className="text-3xl mb-4 text-black dark:text-gray-300 font-semibold">
                Frontend Developer
              </h2>
              <p className="leading-relaxed text-lg text-gray-900 dark:text-gray-300">
                As a driven front-end developer, I am advancing my skills through
                a governor-initiated program, focused on mastering cutting-edge
                technologies. With hands-on experience in HTML, CSS, TypeScript,
                JavaScript, React, Next.js, and Tailwind, I have built a wide
                array of real-world projects that reflect both creativity and a
                solid grasp of modern development practices. My background in
                digital marketing further strengthens my ability to create
                user-focused solutions that not only perform well but also
                resonate with audiences. I am committed to continuous growth and
                contributing impactful solutions in the tech and marketing
                landscapes.
              </p>
              <div className="flex justify-center space-x-4 mt-8">
                <button className="inline-flex items-center justify-center text-white bg-gradient-to-r from-gray-700 to-black border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 hover:shadow-xl transform hover:scale-110 transition-all duration-500 text-lg rounded-full animate-pulse">
                  <Link href="https://github.com/yousrakhan23" target="_blank">
                    <FaGithub size={26} />
                  </Link>
                </button>
                <button className="inline-flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-blue-700 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 hover:shadow-xl transform hover:scale-110 transition-all duration-500 text-lg rounded-full animate-pulse">
                  <Link
                    href="https://www.linkedin.com/in/hafiza-yousra-khan-/"
                    target="_blank"
                  >
                    <FaLinkedin size={26} />
                  </Link>
                </button>
                <button className="inline-flex items-center justify-center text-white bg-gradient-to-r from-purple-800 to-pink-700 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 hover:shadow-xl transform hover:scale-110 transition-all duration-500 text-lg rounded-full animate-pulse">
                  <Link
                    href="https://www.instagram.com/_fumodoarishika/profilecard/?igsh=MWdpazkyOGVwdnd2MA=="
                    target="_blank"
                  >
                    <FaSquareInstagram size={26} />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        </section>
  );
};

export default About;