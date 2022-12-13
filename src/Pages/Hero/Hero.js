import React from "react";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="h-[90vh] lg:flex justify-center items-center">
      <div className="lg:w-1/2 mx-auto px-5 lg:px-0 lg:mt-0 mt-10">
        <p className="font-mono text-lg">
          Welcome to my <br />
          <span className="lg:text-6xl text-3xl lg:leading-[100px] lg:my-0 my-4 flex gap-5 text-[#8892B0]">
            Personal
            <Typewriter
              options={{
                strings: ["Portfolio", "Website"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
        <p className="font-mono lg:w-[500px] text-lg  text-justify">
          Hey, I am a Web Developer.A Front End web developer from Bangladesh. I
          design and code beautifully simple things, and I love what I do.{" "}
        </p>
        <button className="font-semibold cursor-pointer hover:text-white text-lg tracking-wid text-[#8892B0] outline-1 outline rounded-sm px-3 py-2 hover:bg-gray-700 ease-in duration-300 mt-5">
          Download Resume
        </button>
        <div className="fixed bottom-4 left-24 lg:block hidden">
          <div className="text-2xl flex justify-center items-center flex-col space-y-3">
            <a
              href="https://www.facebook.com/razibul.islam.1694059"
              className="block"
            >
              <CiFacebook className="cursor-pointer" />
            </a>{" "}
            <a href="https://github.com/Razibul-Islam" className="block">
              <VscGithubAlt className="cursor-pointer" />
            </a>{" "}
            <a href="https://twitter.com/Razibul35001605" className="block">
              <CiTwitter className="cursor-pointer" />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/razibul-islam1/"
              className="block"
            >
              <FiLinkedin className="cursor-pointer" />
            </a>
            <div className="w-[1px] h-32 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
