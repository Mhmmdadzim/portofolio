import React, { useEffect, useState } from "react";
import {
  Code2,
  Award,
  Boxes,
  ExternalLink,
  Github,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import Certificate from "../components/Certificate";
import TechStackIcon from "../components/TechStackIcon";


// ========================================
// PROJECT DATA
// ========================================

const projectData = [
  {
    id: 1,
    Title: "TollCare Helpdesk",
    Img: "/TollCare.png",
    Description:
      "Sistem pengaduan dan monitoring kerusakan jalan tol yang membantu pengguna membuat laporan dan memantau status pengaduan.",
    Link: "https://tollcare-helpdesk-production.up.railway.app/",
    TechStack: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
    Features: [
      "Buat laporan kerusakan",
      "Upload foto lokasi",
      "Tracking status ticket",
      "Halaman admin",
    ],
  },
];


// ========================================
// CERTIFICATE DATA
// ========================================

const certificateData = [
  {
    id: 1,
    Img: "/certificates 1.jpg",
  },
  {
    id: 2,
    Img: "/certificates 2.jpg",
  },
  {
    id: 3,
    Img: "/certificates 3.jpg",
  },
  {
    id: 4,
    Img: "/certificates 4.jpg",
  },
];


// ========================================
// TECH STACK DATA
// ========================================

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
];


// ========================================
// TAB BUTTON
// ========================================

const TabButton = ({
  active,
  icon: Icon,
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex-1
        flex items-center justify-center gap-2
        px-4 py-3.5
        rounded-xl
        text-sm font-medium
        transition-all duration-300
        ${
          active
            ? "bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 text-cyan-300 border border-cyan-400/20"
            : "text-gray-500 hover:text-white hover:bg-white/5 border border-transparent"
        }
      `}
    >
      <Icon
        className={`w-4 h-4 ${
          active ? "text-cyan-400" : "text-gray-500"
        }`}
      />

      {label}

      {active && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
      )}
    </button>
  );
};


// ========================================
// FEATURED PROJECT
// ========================================

const FeaturedProject = ({ project }) => {
  return (
    <div
      className="group relative"
      data-aos="fade-up"
    >

      {/* Glow */}

      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />


      <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-0 overflow-hidden rounded-3xl border border-white/10 bg-[#07111f]/80 backdrop-blur-xl">


        {/* =================================
            IMAGE
        ================================= */}

        <div className="relative min-h-[280px] lg:min-h-[430px] overflow-hidden bg-black/20">

          <img
            src={project.Img}
            alt={project.Title}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Image Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-70" />

          {/* Featured Badge */}

          <div className="absolute top-5 left-5">

            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#050B14]/80 backdrop-blur-xl border border-cyan-400/20">

              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-xs text-cyan-300 font-medium">
                Featured Project
              </span>

            </div>

          </div>

        </div>


        {/* =================================
            CONTENT
        ================================= */}

        <div className="p-7 md:p-9 flex flex-col justify-center">

          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Web Application
          </p>

          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {project.Title}
          </h3>

          <p className="text-gray-400 leading-relaxed mt-5">
            {project.Description}
          </p>


          {/* Features */}

          <div className="grid sm:grid-cols-2 gap-3 mt-6">

            {project.Features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />

                <span className="text-sm text-gray-400">
                  {feature}
                </span>
              </div>
            ))}

          </div>


          {/* Tech Stack */}

          <div className="flex flex-wrap gap-2 mt-7">

            {project.TechStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400"
              >
                {tech}
              </span>
            ))}

          </div>


          {/* Buttons */}

          <div className="flex flex-wrap gap-3 mt-8">

            <a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/button inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm font-medium shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >

              View Project

              <ExternalLink className="w-4 h-4 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 transition-transform" />

            </a>


            <a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 text-sm hover:text-cyan-300 hover:border-cyan-400/20 transition-all duration-300"
            >

              Live Demo

              <ArrowUpRight className="w-4 h-4" />

            </a>

          </div>

        </div>

      </div>

    </div>
  );
};


// ========================================
// PORTFOLIO
// ========================================

const Portfolio = () => {

  const [activeTab, setActiveTab] = useState("projects");

  const [projects] = useState(projectData);

  const [certificates] = useState(certificateData);


  // ========================================
  // AOS
  // ========================================

  useEffect(() => {

    AOS.init({
      once: true,
      duration: 800,
      offset: 50,
    });

  }, []);


  // ========================================
  // LOCAL STORAGE
  // ========================================

  useEffect(() => {

    localStorage.setItem(
      "projects",
      JSON.stringify(projects)
    );

    localStorage.setItem(
      "certificates",
      JSON.stringify(certificates)
    );

    window.dispatchEvent(
      new Event("portfolioDataUpdated")
    );

  }, [projects, certificates]);


  return (

    <section
      id="Portofolio"
      className="relative min-h-screen py-24 md:py-32 px-[6%] lg:px-[10%] bg-[#050B14] text-white overflow-hidden"
    >

      {/* =================================
          BACKGROUND
      ================================= */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-10 left-[-150px] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-10 right-[-150px] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px]" />

      </div>


      <div className="relative z-10 max-w-6xl mx-auto">


        {/* =================================
            HEADER
        ================================= */}

        <div
          className="mb-12"
          data-aos="fade-up"
        >

          <div className="flex items-center gap-3 mb-4">

            <div className="w-10 h-[1px] bg-cyan-400" />

            <span className="text-cyan-400 text-sm uppercase tracking-[0.3em]">
              My Work
            </span>

          </div>


          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">

            Selected{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>

          </h2>


          <p className="max-w-2xl mt-5 text-gray-400 text-base md:text-lg leading-relaxed">
            Beberapa project yang saya buat untuk menerapkan
            kemampuan programming, web development, dan
            problem solving.
          </p>

        </div>


        {/* =================================
            TAB NAVIGATION
        ================================= */}

        <div
          className="p-1.5 rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >

          <div className="flex gap-1">

            <TabButton
              active={activeTab === "projects"}
              icon={Code2}
              label="Projects"
              onClick={() => setActiveTab("projects")}
            />

            <TabButton
              active={activeTab === "certificates"}
              icon={Award}
              label="Certificates"
              onClick={() => setActiveTab("certificates")}
            />

            <TabButton
              active={activeTab === "tech"}
              icon={Boxes}
              label="Tech Stack"
              onClick={() => setActiveTab("tech")}
            />

          </div>

        </div>


        {/* =================================
            PROJECTS
        ================================= */}

        {activeTab === "projects" && (

          <div>

            {projects.map((project) => (
              <FeaturedProject
                key={project.id}
                project={project}
              />
            ))}


            {/* Project Count */}

            <div
              className="flex items-center justify-center gap-2 mt-8 text-gray-500 text-sm"
              data-aos="fade-up"
            >

              <Code2 className="w-4 h-4" />

              <span>
                {projects.length} Featured Project
              </span>

            </div>

          </div>

        )}


        {/* =================================
            CERTIFICATES
        ================================= */}

        {activeTab === "certificates" && (

          <div data-aos="fade-up">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {certificates.map((certificate) => (

                <div
                  key={certificate.id}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.025] hover:border-cyan-400/20 transition-all duration-300"
                >

                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <Certificate
                    ImgSertif={certificate.Img}
                  />

                </div>

              ))}

            </div>


            <div className="flex justify-center mt-8">

              <div className="flex items-center gap-2 text-gray-500 text-sm">

                <Award className="w-4 h-4 text-cyan-400" />

                {certificates.length} Certificates

              </div>

            </div>

          </div>

        )}


        {/* =================================
            TECH STACK
        ================================= */}

        {activeTab === "tech" && (

          <div data-aos="fade-up">

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

              {techStacks.map((stack, index) => (

                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] hover:bg-cyan-400/[0.04] hover:border-cyan-400/20 transition-all duration-300 p-2"
                >

                  <TechStackIcon
                    TechStackIcon={stack.icon}
                    Language={stack.language}
                  />

                </div>

              ))}

            </div>


            <div className="mt-8 flex justify-center">

              <div className="flex items-center gap-2 text-gray-500 text-sm">

                <Boxes className="w-4 h-4 text-emerald-400" />

                Technologies & tools I use

              </div>

            </div>

          </div>

        )}

      </div>

    </section>

  );
};


export default Portfolio;