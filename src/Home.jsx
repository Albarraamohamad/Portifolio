import React, { useState, useEffect } from "react";
import img from "./WhatsApp Image 2025-04-15 at 02.07.16_fcc34321.jpg";
import { FaDownload, FaGithub, FaLinkedin, FaSquareWhatsapp, FaWhatsapp } from "react-icons/fa6";
import img1 from "./WhatsApp_Image_2025-04-15_at_02.07.16_fcc34321-removebg-preview.png";
import logo from "./WhatsApp_Image_2025-04-17_at_22.58.08_79bbf741-removebg-preview.png";
import "./App.css";
import { HiMenu, HiX } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import ToolsGrid from "./Tools";
import ToggleSection from "./ToggleSection";
import { RiStarSFill } from "react-icons/ri";
import img3 from "./assests/0d609ddd-f2bd-4d3f-b2ab-ad0c7071e3a8.jpeg";
import img4 from "./assests/feed_mostafa_001-R7reURVe.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import img5 from "./assests/WhatsApp Image 2025-04-21 at 17.26.23_9d7726a1.jpg";
import ContactForm from "./ContactForm";
import {Link } from 'react-router-dom'
import Footer from "./Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
    <div className="text-white relative">
      <div className="  bottom-2 right-2 fixed">
        <Link to='https://api.whatsapp.com/send/?phone=201067114551&type=phone_number&app_absent=0'>
        <FaSquareWhatsapp className="text-5xl text-green-500 cursor-pointer" />
        </Link>
        
      </div>
      {/* Navbar */}
      <div className="sticky top-0 z-50 py-4 px-6 md:px-10 flex justify-between items-center ">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="w-16" />
        </div>

        {/* Menu Icon for Mobile */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex text-white space-x-3 bg-[#1F1F21] py-2 px-2 rounded-xl 
          ${
            isOpen
              ? "flex flex-col absolute top-20 left-6 right-6 z-10"
              : "hidden"
          } md:static md:flex-row`}
        >
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

        {/* Contact Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className={`px-4 py-2 rounded-md transition ${
              activeSection === "contact"
                ? "bg-white text-black"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="grid grid-cols-1  md:grid-cols-2 items-center px-10 md:px-10 py-10 xs:px-3"
      >
        {/* Left Side - Text */}
        <div className="order-2 md:order-1 ">
          <div className="flex items-center gap-3 mb-10">
            <img src={img} alt="" className="w-8 rounded-lg" />
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_5px_rgba(34,197,94,0.8)]" />
              <p>Active For Work</p>
            </div>
          </div>

          <div className="mb-5">
            <h1 className="lg:text-5xl md:text-3xl xs:text-4xl  font-bold tracking-wide bg-gradient-to-r from-white via-slate-50 bg-clip-text text-transparent">
              Building Scalable
            </h1>
            <h1 className="lg:text-5xl md:text-3xl xs:text-4xl font-bold tracking-wide bg-gradient-to-r from-white via-slate-100 bg-clip-text text-transparent">
              Modern Websites for
            </h1>
            <h1 className="lg:text-5xl xs:text-4xl md:text-4xl font-bold tracking-wide bg-gradient-to-r from-white via-slate-100 bg-clip-text text-transparent">
              The Future
            </h1>
          </div>

          <button className="mt-10 flex items-center gap-2 bg-blue-600 py-2 px-4 rounded-lg text-black hover:text-white transition duration-500 hover:bg-blue-600 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)]">
            Download CV <FaDownload />
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative order-1 right-20 bottom-10 md:order-2 md:justify-self-end w-full max-w-[280px] mx-auto md:mx-0 overflow-hidden rounded-xl z-30 hidden md:block">
          <img src={img1} alt="main" className="w-full h-auto block z-20 " />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#37BCF7] to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* About Section */}

      <section id="section1" className="pt-16 px-12 xs:px-3 md:px-10">
        <div className="bg-[#262628] py-10 px-5 rounded-xl ">
          <p>
            Welcome! I'm{" "}
            <span className="text-blue-500 font-bold drop-shadow-[0_0_10px_#37BCF7]">
              Barraa Mohamed
            </span>
            , Results-driven Front-End Developer with a solid background in
            HTML, CSS, JavaScript, and Reactjs. Experienced in developing
            responsive, user-friendly, and interactive web applications. Strong
            problem-solving abilities, teamwork skills, and project management
            experience through academic projects, volunteer leadership roles,
            and competitive programming. Passionate about modern web
            technologies, UI/UX best practices, and performance optimization.
          </p>
          <div className="flex justify-between">
            <div className="flex items-center mt-4">
              <div>
                <h1 className="text-4xl">9</h1>
                <span className="text-xs absolute">Project Done</span>
              </div>

              <FaPlus className="text-blue-500 text-xl" />

              <div className="ml-12">
                <h1 className="text-4xl">1</h1>
                <span className="text-xs absolute">Year of Experince</span>
              </div>
              <FaPlus className="text-blue-500 text-xl" />
            </div>
            <div>
              <img
                src={logo}
                alt="logo"
                className="w-16 mr-4 mt-4 brightness-200 saturate-200"
                style={{
                  filter:
                    "drop-shadow(0 0 10px #3b82f6) drop-shadow(0 0 20px #3b82f6)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h1 className="text-3xl">Essential Tools I use</h1>
          <p>
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing websites & applications.
          </p>
          <ToolsGrid />
        </div>
      </section>

      {/* Work Section */}
      <section id="section2" className="pt-16 px-10 xs:px-3 lg:px-10">
        <div className=" py-10 px-5 rounded-xl ">
          <ToggleSection />
        </div>
      </section>
      {/* Review section */}
      <section id="section3" className="pt-16 px-12 xs:px-3 md:px-10">
        <h1 className="mb-10 text-2xl font-bold">Whats Our Customer Say</h1>
        <div className="bg-blue-300 w-48 px-3 py-2 mb-10">
          <h1 className="font-bold text-2xl">Reviews</h1>
        </div>
        <div className=" w-96 bg-black py-6 px-5 rounded-xl ">
          <div className="flex mb-5 text-xl">
            <RiStarSFill className="text-orange-500" />
            <RiStarSFill className="text-orange-500" />
            <RiStarSFill className="text-orange-500" />
            <RiStarSFill className="text-orange-500" />
            <RiStarSFill className="text-orange-500" />
          </div>
          <p>
            I just want to say a huge thank you for the outstanding website you
            built for me. The work was more than excellent — clean, modern, and
            super professional. After launching it and sharing it on social
            media, I was honestly surprised… my very first client reached out
            because they loved the design! That’s a direct result of your hard
            work and talent. I couldn’t be happier with the service, the
            communication, and the price. If anyone’s looking for a standout
            website, you’re 100% the person to go to. Highly recommended! Thanks
            again for everything!
          </p>
          <div className="flex gap-2 items-center mt-5">
            <div>
              <img src={img3} alt="" className="w-14 rounded-full" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Belal Naser</h1>
              <p>Thank You</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-blue-300 w-48 px-3 py-2 mb-10 mt-10">
            <h1 className="font-bold text-2xl">Images</h1>
          </div>
          <img src={img4} alt="" />
        </div>
      </section>

      {/* Questions Section */}
      <section
        id="section4"
        className="mt-32 px-10 pt-16  rounded-xl xs:px-3 lg:px-10"
      >
        <div className="space-y-4">
          <h1 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h1>

          <details className="bg-[#262628] border border-cyan-400 p-4 rounded-lg text-white">
            <summary className="cursor-pointer text-cyan-300 font-semibold">
              What services do you offer?
            </summary>
            <p className="mt-2 text-gray-300">
              I offer full-stack web development including design, frontend,
              backend, and deployment.
            </p>
          </details>

          <details className="bg-[#262628] border border-cyan-400 p-4 rounded-lg text-white">
            <summary className="cursor-pointer text-cyan-300 font-semibold">
              How long does it take to build a website?
            </summary>
            <p className="mt-2 text-gray-300">
              It depends on the complexity, but typically it ranges from a few
              days to two weeks.
            </p>
          </details>

          <details className="bg-[#262628] border border-cyan-400 p-4 rounded-lg text-white">
            <summary className="cursor-pointer text-cyan-300 font-semibold">
              Do you offer revisions?
            </summary>
            <p className="mt-2 text-gray-300">
              Yes, I offer multiple revisions to ensure you’re fully satisfied
              with the final product.
            </p>
          </details>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mt-32 px-10 py-16  rounded-xl mb-32 xs:px-3 lg:px-10"
      >
        <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-3">
          <div>
            <h1 className="text-2xl font-bold">Contact Me For Collaboration</h1>
            <p className="mt-5">
              Reach out today to discuss your project needs and start
              collaborating on something amazing!
            </p>
            <div className="flex gap-3 cursor-pointer mt-5">
              <Link to='https://github.com/Albarraamohamad'>
              <FaGithub className="text-5xl border-2 rounded-md border-gray-700 py-2 px-2 hover:text-black hover:bg-white hover:border-white duration-500" />
              </Link>
              <Link to='https://www.linkedin.com/in/albarraa-mohamad-88058b316/'>
              <FaLinkedin className="text-5xl border-2 rounded-md border-gray-700 py-2 px-2 hover:text-black hover:bg-white hover:border-white duration-500" />
              </Link>
              <Link to='https://www.facebook.com/albarraa.alharam/'>
              <FaFacebookSquare className="text-5xl border-2 rounded-md border-gray-700 py-2 px-2 hover:text-black hover:bg-white hover:border-white duration-500" />
              </Link>
              <Link to='https://api.whatsapp.com/send/?phone=201067114551&type=phone_number&app_absent=0'>
              <FaWhatsapp className="text-5xl border-2 rounded-md border-gray-700 py-2 px-2 hover:text-black hover:bg-white hover:border-white duration-500" />
              </Link>
             
            </div>
            <div className="">
              <div className="relative w-56 h-56 ml-28 mt-10">
                {/* Animated dotted border */}
                <div className="absolute inset-0 rounded-full border-4 border-dotted border-cyan-400 animate-spin-slow"></div>

                {/* Image centered inside */}
                <img
                  src={img5}
                  alt="profile"
                  className="absolute top-1/2 left-1/2 w-52 h-52 object-cover rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
                />
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;