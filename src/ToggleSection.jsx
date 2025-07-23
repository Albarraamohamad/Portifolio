import { useState } from "react";
import Web3 from "./assests/Screenshot 2025-04-15 015800.png";
import Ecoomerse from "./assests/Screenshot 2025-04-15 020321.png";
import netflix from "./assests/Screenshot 2025-04-15 020554.png";
import Weather from "./assests/Screenshot 2025-05-02 152709.png";
import crative from "./assests/Screenshot 2025-05-02 152304.png";
import coffe from "./assests/Screenshot 2025-05-02 153004.png";
import fiore from './assests/Screenshot 2025-06-12 194308.png';
import arce from './assests/Screenshot 2025-06-23 003631.png';
import prime from './assests/Screenshot 2025-07-24 022603.png'
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
      title: "Crativo",
      desc: "Cravito Website For Design Agency",
      img: crative,
      link: "https://criativo-eight.vercel.app/",
    },
    {
      title: "Weather App",
      desc: "Weather App for finding weather by country using API.",
      img: Weather,
      link: "https://weather-app-one-rho-34.vercel.app/",
    },
    {
      title: "Web3 App",
      desc: "DApp using blockchain and wallet connect.",
      img: Web3,
      link: "https://web-3-eta.vercel.app/",
    },
    {
      title: "Coffee",
      desc: "Coffee project for a cafe, showing items and menu.",
      img: coffe,
      link: "https://coffe-project-eight.vercel.app/",
    },
     {
      title: "FIORE",
      desc: "Blossom Webiste To Store in USE To Sell A Blossom",
      img: fiore,
      link: "https://fiore-kappa.vercel.app/",
    },
     {
      title: "ARCE",
      desc: "ARCE Website Talking About How Can Ai Powerd Growwing",
      img: arce ,
      link: "https://arce.vercel.app/",
    },
    {
      title: "PRIME.M AGENCY",
      desc: "Portfolio Website For Media Buying Agency  ",
      img: prime ,
      link: "https://prime-m-agency.vercel.app/",
    }
  ];

  const baseCardStyles =
    "rounded-lg border p-4 text-white border-cyan-400 shadow-[0_0_8px_#0ff] transition duration-300";

  return (
    <section id="section2">
      <div className="rounded-xl min-h-screen">
        <h1 className="text-4xl font-bold mb-10">My Work Highlight</h1>

        {/* Cards Grid */}
        <div
          className={`grid gap-4 mb-6 ${
            showAll
              ? "grid-cols-2 md:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {(showAll ? projects : projects.slice(0, 2)).map((project, index) => (
            <div key={index} className={baseCardStyles}>
              <img src={project.img} alt={project.title} className="rounded-md" />
              <h1 className="mt-4 text-xl font-bold">{project.title}</h1>
              <p className="mt-2 text-gray-300">{project.desc}</p>
              <div className="flex justify-between mt-5 items-center">
                <h1
                  className="text-lg font-bold text-cyan-300"
                  style={{ textShadow: "0 0 3px #0ff, 0 0 5px #0ff" }}
                >
                  React
                </h1>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 text-3xl"
                  title="Visit"
                >
                  <IoEnter />
                </a>
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
