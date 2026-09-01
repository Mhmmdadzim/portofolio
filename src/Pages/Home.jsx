import React, { useState, useEffect, useCallback, memo } from "react";
import { Helmet } from "react-helmet-async";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  ExternalLink,
  Instagram,
  Code2,
  Sparkles,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// ===============================
// CONFIG
// ===============================

const WORDS = [
  "Informatics Student",
  "Frontend Developer",
  "Software Developer",
];

const TECH_STACK = [
  "React",
  "JavaScript",
  "Python",
  "HTML & CSS",
];

const SOCIAL_LINKS = [
  {
    icon: Github,
    link: "https://github.com/Mhmmdadzim",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/muhammadnuradzim/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/mhmmdadzim/?hl=id",
    label: "Instagram",
  },
];

// ===============================
// STATUS BADGE
// ===============================

const StatusBadge = memo(() => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-md">
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
    </span>

    <span className="text-sm text-gray-300">
      Available for opportunities
    </span>

    <Sparkles className="w-4 h-4 text-cyan-400" />
  </div>
));

// ===============================
// TECH BADGE
// ===============================

const TechBadge = memo(({ tech }) => (
  <div className="group px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300">
    <span className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
      {tech}
    </span>
  </div>
));

// ===============================
// SOCIAL BUTTON
// ===============================

const SocialButton = memo(({ icon: Icon, link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group"
  >
    <div className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300">
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-300 transition-colors" />
    </div>
  </a>
));

// ===============================
// MAIN HOME
// ===============================

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const TYPING_SPEED = 90;
  const ERASING_SPEED = 45;
  const PAUSE_DURATION = 1800;

  // ===============================
  // AOS
  // ===============================

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 30,
    });

    setIsLoaded(true);

    return () => setIsLoaded(false);
  }, []);

  // ===============================
  // TYPING EFFECT
  // ===============================

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setIsTyping(false);
        }, PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);

  // ===============================
  // RENDER
  // ===============================

  return (
    <>
      <Helmet>
        <title>
          Muhammad Nur Adzim — Informatics Student & Web Developer
        </title>

        <meta
          name="description"
          content="Portfolio Muhammad Nur Adzim — Informatics Student and Web Developer."
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <section
        id="Home"
        className="relative min-h-screen overflow-hidden bg-[#050B14] px-[6%] lg:px-[10%]"
      >
        {/* ===============================
            BACKGROUND EFFECT
        =============================== */}

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />

          <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-cyan-400/[0.03] rounded-full" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-emerald-400/[0.03] rounded-full" />
        </div>

        {/* ===============================
            CONTENT
        =============================== */}

        <div
          className={`relative z-10 min-h-screen max-w-7xl mx-auto flex items-center transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center py-28 lg:py-20">

            {/* ===============================
                LEFT
            =============================== */}

            <div
              className="text-left"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <StatusBadge />

              <div className="mt-7">
                <p className="text-cyan-400 text-sm md:text-base font-medium tracking-[0.25em] uppercase mb-4">
                  Hello, I'm
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-[0.95] tracking-tight">
                  <span className="text-white">
                    Muhammad
                  </span>

                  <br />

                  <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                    Nur Adzim
                  </span>
                </h1>
              </div>

              {/* TYPING */}

              <div
                className="mt-7 flex items-center"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <Code2 className="w-5 h-5 text-cyan-400 mr-3" />

                <span className="text-xl md:text-2xl text-gray-200">
                  {text}
                </span>

                <span className="ml-1 w-[2px] h-6 bg-cyan-400 animate-blink" />
              </div>

              {/* DESCRIPTION */}

              <p
                className="mt-6 max-w-xl text-gray-400 text-base md:text-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                Mahasiswa Informatika yang tertarik pada pengembangan
                website, software development, dan teknologi digital.
                Saya senang mengubah ide menjadi project yang nyata,
                fungsional, dan mudah digunakan.
              </p>

              {/* TECH */}

              <div
                className="flex flex-wrap gap-2 mt-7"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                {TECH_STACK.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>

              {/* BUTTON */}

              <div
                className="flex flex-wrap gap-4 mt-9"
                data-aos="fade-up"
                data-aos-delay="550"
              >
                <a
                  href="#Portofolio"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  View Projects

                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>

                <a
                  href="/CV-Muhammad-Nur-Adzim.pdf"
                  download
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-200 hover:bg-white/[0.06] hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300"
                >
                  Download CV

                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* SOCIAL */}

              <div
                className="flex gap-3 mt-8"
                data-aos="fade-up"
                data-aos-delay="650"
              >
                {SOCIAL_LINKS.map((social) => (
                  <SocialButton
                    key={social.label}
                    {...social}
                  />
                ))}
              </div>
            </div>

            {/* ===============================
                RIGHT
            =============================== */}

            <div
              className="relative flex items-center justify-center"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {/* GLOW */}

              <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-cyan-500/10 rounded-full blur-[100px]" />

              {/* MAIN CARD */}

              <div className="relative w-full max-w-[550px]">

                {/* TOP LABEL */}

                <div className="absolute -top-5 left-6 md:left-10 z-20 px-4 py-2 rounded-lg border border-cyan-400/20 bg-[#07111f]/90 backdrop-blur-xl">
                  <span className="text-xs md:text-sm text-cyan-300">
                    &lt; developing /&gt;
                  </span>
                </div>

                {/* IMAGE */}

                <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4 md:p-6 shadow-2xl shadow-cyan-500/10">

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/[0.05] to-emerald-500/[0.05]" />

                  <img
                    src="/Animation1.gif"
                    alt="Developer Animation"
                    className="relative z-10 w-full h-auto object-contain"
                  />

                  {/* BOTTOM BAR */}

                  <div className="relative z-10 mt-3 flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                      <p className="text-xs text-gray-500">
                        CURRENT FOCUS
                      </p>

                      <p className="text-sm text-gray-200 mt-1">
                        Web Development
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                      <span className="text-xs text-gray-400">
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                {/* FLOATING CARD 1 */}

                <div className="absolute -left-5 md:-left-12 top-[28%] hidden sm:block animate-float">
                  <div className="px-4 py-3 rounded-xl border border-white/10 bg-[#07111f]/90 backdrop-blur-xl shadow-xl">
                    <p className="text-[10px] text-gray-500">
                      STACK
                    </p>

                    <p className="text-sm text-cyan-300 mt-1">
                      React + JS
                    </p>
                  </div>
                </div>

                {/* FLOATING CARD 2 */}

                <div className="absolute -right-5 md:-right-10 bottom-[22%] hidden sm:block animate-float">
                  <div className="px-4 py-3 rounded-xl border border-white/10 bg-[#07111f]/90 backdrop-blur-xl shadow-xl">
                    <p className="text-[10px] text-gray-500">
                      BUILDING
                    </p>

                    <p className="text-sm text-emerald-300 mt-1">
                      Real Projects
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1">
            <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Home);