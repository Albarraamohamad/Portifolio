import { motion } from "framer-motion";
import figma from './assests/figma-svgrepo-com.svg';
import html from './assests/html-5-svgrepo-com.svg';
import css from './assests/css-3-svgrepo-com.svg';
import js from './assests/javascript-svgrepo-com.svg';
import react1 from './assests/react-svgrepo-com.svg';
import redux from './assests/redux-svgrepo-com.svg';
import fremaer from './assests/Framer_motion_Logo_PNG_Vector__SVG__Free_Download-removebg-preview.png';

const tools = [
  { img: figma, title: "Figma", desc: "Design tool" },
  { img: html, title: "HTML", desc: "Structured content." },
  { img: css, title: "CSS", desc: "User Interface" },
  { img: js, title: "JavaScript", desc: "Interaction" },
  { img: react1, title: "React", desc: "Framework" },
  { img: redux, title: "Redux Tolkit", desc: "Framework" },
  { img: fremaer, title: "Framer Motion", desc: "Animations" },
];

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      duration: 0.6,
    },
  },
};

export default function ToolsGrid() {
  return (
    <div className="overflow-x-hidden">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 gap-6 sm:px-2 sm:py-2">
        {tools.map((tool, index) => (
          <motion.div
  key={index}
  variants={fadeInRight}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="flex cursor-pointer items-center border border-white/20 px-4 py-2 sm:px-2 sm:py-2 rounded-xl bg-transparent shadow-md hover:shadow-[0_0_15px_#37BCF7] transition duration-300"
>
  <div className="bg-[#262628] rounded-lg flex items-center justify-center mr-4 w-14 h-14">
    <img
      src={tool.img}
      alt={tool.title}
      className="w-10 h-10 object-contain"
    />
  </div>
  <div>
    <h1 className="font-bold text-2xl tracking-wide bg-gradient-to-r from-white bg-[#262628] bg-clip-text text-transparent">
      {tool.title}
    </h1>
    <p className="text-gray-300">{tool.desc}</p>
  </div>
</motion.div>

        ))}
      </div>
    </div>
  );
}
