import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import img from "../assets/dennis-pics.jpg";
import AutoTypingComponent from "../components/AutoTypingCom";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
var Home = function () {
    return (_jsx("div", { id: "home", className: "h-screen flex items-center justify-center", children: _jsxs("div", { className: "p-6 md:p-9 px-6 md:px-20 text-center flex flex-col items-center", children: [_jsx("img", { src: img, alt: "Dennis", className: "w-32 h-32 md:w-60 md:h-60 rounded-full border-4 border-red-600 shadow-lg" }), _jsxs("h1", { className: "mt-4 text-3xl md:text-5xl font-poppins font-bold", children: ["Ebere ", _jsx("span", { className: "text-red-600", children: "Dennis" })] }), _jsx("div", { className: "mt-4", children: _jsx(AutoTypingComponent, { multiText: [
                            "Creating Amazing Experiences",
                            "Building Scalable Solutions",
                            "Passionate About Web Development"
                        ], multiTextColors: ["#ff5733", "#2ecc71", "#3498db"], textStyle: { fontFamily: "Poppins", color: "#3F3D56", fontWeight: 500, fontSize: "18px" }, typeSpeed: 100 }) }), _jsx("p", { className: "mt-6 text-black text-sm md:text-base max-w-md", children: "I\u2019m a passionate developer specializing in crafting responsive, user-friendly web applications. Let's build something amazing together!" }), _jsxs("div", { className: "flex gap-9 items-center mt-4 text-red-600 md:text-4xl", children: [_jsxs("a", { href: "https://x.com/tech_G_u_y", children: [" ", _jsx(FaXTwitter, {}), " "] }), _jsxs("a", { href: "https://www.linkedin.com/in/prince-dennis-2765a2145/", children: [" ", _jsx(FiLinkedin, {}), " "] }), _jsxs("a", { href: "https://github.com/princedenniz", children: [" ", _jsx(FaGithub, {}), " "] })] })] }) }));
};
export default Home;
