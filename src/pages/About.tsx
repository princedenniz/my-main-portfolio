import React from 'react';
import AutoTypingComponent from '../components/AutoTypingCom';
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlinePinterest } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

const About = () => {
  return (
    <div id='about' className="p-6 md:p-12 overflow-hidden">
      <div className="text-center md:text-left mb-8">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-3xl text-gray-600">
          I'm <span className="font-bold text-red-600 text-3xl">Ebere Dennis</span>, a{' '}
          <span className="text-red-500">
            <AutoTypingComponent
              multiText={[
                "Frontend Developer",
                "Backend Developer"
              ]}
              multiTextColors={["#ff5733", "#2ecc71", "#3498db"]}
              textStyle={{
                fontFamily: "Poppins",
                color: "#3F3D56",
                fontWeight: 500,
                fontSize: "24px",
                display: "inline"
              }}
              typeSpeed={100}
            />
          </span>
        </p>
      </div>

      <div className="space-y-4 text-gray-700">
        <p className="text-xl">
          Hi! My name is Ebere Dennis, a Web Developer with a strong background in JavaScript (React.js, Vue.js, Node.js)</p>

        <p className="text-xl">
          I'm skilled in developing and implementing new websites, improving and maintaining existing website, and designing and updating website. I have a proven track record of effectively communicating with management and technical support colleagues. Passionate about testing and maintaining software to ensure strong functionality and optimization. Always looking to recommend improvements to existing website for optimal performance.
        </p>

        <div className="mt-6 text-lg">
          <h3 className="font-bold">Personal Information:</h3>
          <ul className="space-y-2 grid gap-4 grid-cols-2 pt-10">
            <li> <strong className='flex text-center items-center gap-4'> <LiaBirthdayCakeSolid className='text-red-600'/>  Birthday:</strong> 14.04.1995</li>
            <li><strong className='flex text-center items-center gap-4'><IoLocationOutline className="text-red-600"/>  Location:</strong> Lagos State, Nigeria</li>
            <li><strong className='flex text-center items-center gap-4'><AiOutlinePinterest className="text-red-600"/> Interests:</strong> Researching, Reading, Traveling, Pianist</li>
            <li><strong className='flex text-center items-center gap-4'>Study:</strong> BSC. Computer Science, Lagos State University, Lagos</li>
            <li><strong className='flex text-center items-center gap-4'><IoSchoolOutline className="text-red-600"/> Degree:</strong> Bachelor of Engineering</li>
            <li><strong className='flex text-center items-center gap-4'><CiPhone className="text-red-600"/> Phone:</strong> +2348037147231</li>
            <li><strong className='flex text-center items-center gap-4'><MdOutlineEmail className="text-red-600"/> Email:</strong> <a href="mailto:dennisprince815@gmail.com" className="text-sm">dennisprince815@gmail.com</a></li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
