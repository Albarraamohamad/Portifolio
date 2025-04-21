import { useState } from "react";
import { Link } from "react-router-dom";
import Web3 from "./assests/Screenshot 2025-04-15 015800.png";
import Ecoomerse from "./assests/Screenshot 2025-04-15 020321.png";
import netflix from "./assests/Screenshot 2025-04-15 020554.png";
import { IoEnter } from "react-icons/io5";

export default function ToggleSection() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "E-commerce Website",
      desc: "A modern e-commerce website with filtering and responsive design.",
      img: Ecoomerse,
      link: "https://e-commerse-ten-phi.vercel.app/",
    },
    {
      title: "Netflix",
      desc: "A Netflix clone using API, Context API, authentication, and kids mode.",
      img: netflix,
      link: "https://netflix-drab-nu.vercel.app/",
    },
    {
      title: "Web3 App",
      desc: "DApp using blockchain and wallet connect.",
      img: Web3,
      link: "https://web-3-eta.vercel.app/",
    },
    
   
  ];

  const baseCardStyles =
    "rounded-lg border p-4 text-white border-cyan-400 shadow-[0_0_8px_#0ff] transition duration-300";

  return (
    <section id="section2" className="   ">
      <div className="rounded-xl min-h-screen">
        <h1 className="text-4xl font-bold mb-10">My Work Hilight</h1>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
          {(showAll ? projects : projects.slice(0, 2)).map((project, index) => (
            <div key={index} className={baseCardStyles}>
              <img src={project.img} alt="" className="rounded-md" />
              <h1 className="mt-4 text-xl font-bold">{project.title}</h1>
              <p className="mt-2 text-gray-300">{project.desc}</p>
              <div className="flex justify-between mt-5 items-center">
                <h1
                  className="text-lg font-bold text-cyan-300"
                  style={{ textShadow: "0 0 3px #0ff, 0 0 5px #0ff" }}
                >
                  React
                </h1>
                <Link to={project.link} className="mr-2 text-3xl">
                  <IoEnter />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded transition duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
