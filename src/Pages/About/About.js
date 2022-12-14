import React from "react";
import pic3 from '../../assets/pic3.png';
import { BsVectorPen } from "react-icons/bs";
import Resume from "../../assets/Razibul_Islam.pdf";

const About = () => {
  return (
    <div className="w-[70%] mx-auto">
      <h1 className="text-7xl text-[#8892B0] text-center mb-10">About Me</h1>
      <div className="grid grid-cols-2 gap-28">
        <div className="bg-[#8892B0] flex items-center justify-center rounded-lg py-5 border-4 border-indigo-500/100">
        <img
          src={pic3}
          alt=""
          className="w-11/12 rounded-lg"
        />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-semibold">Front-End Web Developer</h2>
          <p className="mt-6 text-lg">
            I am a self-motivated Full Stack Developer with knowledge in
            React.js, Node.js, Express.js, Google Authentication, MongoDB,
            JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive web
            development.
          </p>
          <div className="mt-5 space-y-3">
            <p className="flex items-center justify-start text-lg ">
              <BsVectorPen />
              <span className="ml-2">
                <b>Birthday:</b> 12 Oct 2003
              </span>
            </p>
            <p className="flex items-center justify-start text-lg">
              <BsVectorPen />
              <span className="ml-2">
                <b>Age:</b> 19 Years
              </span>
            </p>
            <p className="flex items-center justify-start text-lg">
              <BsVectorPen />
              <span className="ml-2">
                <b>City:</b> <cite>Savar, Dhaka, Bangladesh</cite>
              </span>
            </p>
            <p className="flex items-center justify-start text-lg">
              <BsVectorPen />
              <span className="ml-2">
                <b>Phone:</b> +880 1400145618
              </span>
            </p>
            <p className="flex items-center justify-start text-lg">
              <BsVectorPen />
              <span className="ml-2">
                <b>Email:</b> razibulislam665@gmail.com
              </span>
            </p>
            <p className="flex items-center justify-start text-lg">
              <BsVectorPen />
              <span className="ml-2">
                <b>Freelance:</b> Available
              </span>
            </p>
            <p className="font-semibold cursor-pointer hover:text-white text-lg tracking-wide text-gray-900 lg:text-[#8892B0]">
              <button className="outline-1 outline rounded-sm px-3 py-2 hover:bg-gray-700 ease-in duration-300">
                <a href={Resume} download={true}>
                  Download Resume
                </a>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
