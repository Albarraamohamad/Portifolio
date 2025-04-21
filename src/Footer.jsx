import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "section1",
        "section2",
        "section3",
        "section4",
        "contact",
      ];
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top >= -100 && top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  const navLinkClass = (id) =>
    `px-3 py-2 rounded-md transition duration-200 cursor-pointer ${
      activeSection === id ? "bg-white text-black" : "hover:bg-white/20"
    }`;

  return (
    <footer className=" text-white flex justify-center xs:flex xs:px-3 lg:px-10 xs:justify-center">
      <div className="">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          Let's Work Together Today…
        </h2>

        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10">
          {/* Sitemap */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sitemap</h3>
            <ul className=" text-gray-300 ">
              <div className="flex flex-col  text-gray-300">
                <span
                  onClick={() => scrollToSection("home")}
                  className={navLinkClass("home")}
                >
                  Home
                </span>
                <span
                  onClick={() => scrollToSection("section1")}
                  className={navLinkClass("section1")}
                >
                  About
                </span>
                <span
                  onClick={() => scrollToSection("section2")}
                  className={navLinkClass("section2")}
                >
                  Work
                </span>
                <span
                  onClick={() => scrollToSection("section3")}
                  className={navLinkClass("section3")}
                >
                  Reviews
                </span>
                <span
                  onClick={() => scrollToSection("section4")}
                  className={navLinkClass("section4")}
                >
                  Questions
                </span>
              </div>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-bold mb-4">Socials</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGithub} />
                <a
                  href="https://github.com/Albarraamohamad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLinkedin} />
                <a
                  href="https://www.linkedin.com/in/albarraa-mohamad-88058b316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faFacebook} />
                <a
                  href="https://www.facebook.com/albarraa.alharam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faWhatsapp} />
                <a
                  href="https://api.whatsapp.com/send/?phone=201067114551&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
