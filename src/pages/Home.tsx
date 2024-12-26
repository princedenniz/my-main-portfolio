import React from "react";
import img from "../assets/dennis-pics.jpg";
import AutoTypingComponent from "../components/AutoTypingCom";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div id="home" className="h-screen flex items-center justify-center">
      <div className="p-6 md:p-9 px-6 md:px-20 text-center flex flex-col items-center">
        {/* Image Section */}
        <img
          src={img}
          alt="Dennis"
          className="w-32 h-32 md:w-60 md:h-60 rounded-full border-4 border-red-600 shadow-lg"
        />

        {/* Name Section */}
        <h1 className="mt-4 text-3xl md:text-5xl font-poppins font-bold">
          Ebere <span className="text-red-600">Dennis</span>
        </h1>

        {/* Auto Typing Section */}
        <div className="mt-4">
          <AutoTypingComponent  multiText={[
              "Creating Amazing Experiences",
              "Building Scalable Solutions",
              "Passionate About Web Development"
            ]}
            multiTextColors={["#ff5733", "#2ecc71", "#3498db"]} // Different colors for each text
            textStyle={{ fontFamily: "Poppins", color: "#3F3D56", fontWeight: 500, fontSize: "18px" }}
            typeSpeed={100}/>
        </div>

        {/* Additional Information Section */}
        <p className="mt-6 text-black text-sm md:text-base max-w-md">
          I’m a passionate developer specializing in crafting responsive, user-friendly web applications. Let's build something amazing together!
        </p>

        <div className="flex gap-9 items-center mt-4 text-red-600 md:text-4xl">
            <a href="https://x.com/tech_G_u_y"> <FaXTwitter/> </a>
            <a href="https://www.linkedin.com/in/prince-dennis-2765a2145/"> <FiLinkedin/> </a>
            <a href="https://github.com/princedenniz"> <FaGithub/> </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
