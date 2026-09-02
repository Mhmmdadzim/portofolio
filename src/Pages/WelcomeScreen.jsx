import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, Globe, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const TypewriterEffect = ({ text }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;

        const timer = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 260);

        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className="inline-block">
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const BackgroundEffect = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cyan glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" />

        {/* Emerald glow */}
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" />

        {/* Center glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5 blur-3xl" />
    </div>
);

const IconButton = ({ Icon }) => (
    <div className="relative group hover:scale-110 transition-transform duration-300">
        {/* Glow */}
        <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-300" />

        {/* Button */}
        <div className="relative p-2.5 sm:p-3 md:p-4 bg-[#08111D]/80 backdrop-blur-sm rounded-full border border-cyan-400/20 group-hover:border-cyan-400/50 transition-all duration-300">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-cyan-300 group-hover:text-white transition-colors duration-300" />
        </div>
    </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: false,
        });

        const timer = setTimeout(() => {
            setIsLoading(false);

            setTimeout(() => {
                onLoadingComplete?.();
            }, 1000);
        }, 3400);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    const containerVariants = {
        exit: {
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const childVariants = {
        exit: {
            y: -20,
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-[#050B14] overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit="exit"
                    variants={containerVariants}
                >
                    <BackgroundEffect />

                    <div className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6">
                        <div className="w-full max-w-4xl mx-auto min-w-0">

                            {/* =================================
                                ICONS
                            ================================= */}

                            <motion.div
                                className="
                                    flex
                                    justify-center
                                    items-center
                                    gap-3
                                    sm:gap-4
                                    md:gap-8
                                    mb-7
                                    sm:mb-8
                                    md:mb-12
                                "
                                variants={childVariants}
                            >
                                {[Code2, User, Github].map((Icon, index) => (
                                    <div
                                        key={index}
                                        data-aos="fade-down"
                                        data-aos-delay={index * 200}
                                    >
                                        <IconButton Icon={Icon} />
                                    </div>
                                ))}
                            </motion.div>

                            {/* =================================
                                WELCOME TEXT
                            ================================= */}

                            <motion.div
                                className="text-center mb-7 sm:mb-8 md:mb-12"
                                variants={childVariants}
                            >
                                <h1
                                    className="
                                        font-bold
                                        leading-tight
                                        text-3xl
                                        sm:text-4xl
                                        md:text-6xl
                                    "
                                >
                                    {/* Welcome To My */}

                                    <div
                                        className="
                                            flex
                                            justify-center
                                            items-center
                                            flex-wrap
                                            gap-x-1
                                            sm:gap-x-2
                                            mb-2
                                            sm:mb-4
                                        "
                                    >
                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay="200"
                                            className="text-white"
                                        >
                                            Welcome
                                        </span>

                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay="400"
                                            className="text-white"
                                        >
                                            To
                                        </span>

                                        <span
                                            data-aos="fade-right"
                                            data-aos-delay="600"
                                            className="text-white"
                                        >
                                            My
                                        </span>
                                    </div>

                                    {/* Portfolio Website */}

                                    <div
                                        className="
                                            flex
                                            justify-center
                                            items-center
                                            flex-wrap
                                            gap-x-1
                                            sm:gap-x-2
                                            px-2
                                        "
                                    >
                                        <span
                                            data-aos="fade-up"
                                            data-aos-delay="800"
                                            className="
                                                bg-gradient-to-r
                                                from-cyan-400
                                                via-cyan-300
                                                to-emerald-400
                                                bg-clip-text
                                                text-transparent
                                            "
                                        >
                                            Portofolio
                                        </span>

                                        <span
                                            data-aos="fade-up"
                                            data-aos-delay="1000"
                                            className="
                                                bg-gradient-to-r
                                                from-cyan-400
                                                to-emerald-400
                                                bg-clip-text
                                                text-transparent
                                            "
                                        >
                                            Website
                                        </span>
                                    </div>
                                </h1>
                            </motion.div>

                            {/* =================================
                                WEBSITE LINK
                            ================================= */}

                            <motion.div
                                className="text-center"
                                variants={childVariants}
                                data-aos="fade-up"
                                data-aos-delay="1200"
                            >
                                <a
                                    href="https://MhmmdAdzim.com"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-2
                                        px-4
                                        py-2
                                        sm:px-6
                                        sm:py-3
                                        rounded-full
                                        relative
                                        group
                                        hover:scale-105
                                        transition-transform
                                        duration-300
                                        max-w-full
                                    "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* Glow */}

                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />

                                    <div
                                        className="
                                            relative
                                            flex
                                            items-center
                                            gap-2
                                            text-base
                                            sm:text-xl
                                            md:text-2xl
                                            min-w-0
                                        "
                                    >
                                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300 shrink-0" />

                                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent whitespace-nowrap">
                                            <TypewriterEffect text="MhmmdAdzim.com" />
                                        </span>
                                    </div>
                                </a>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeScreen;