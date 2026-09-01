import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const navItems = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Portofolio", label: "Projects" },
        { href: "#Contact", label: "Contact" },
    ];

    // ===============================
    // SCROLL DETECTION
    // ===============================

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);

            const sections = navItems
                .map((item) => {
                    const section = document.querySelector(item.href);

                    if (section) {
                        return {
                            id: item.href.replace("#", ""),
                            offset: section.offsetTop - 250,
                            height: section.offsetHeight,
                        };
                    }

                    return null;
                })
                .filter(Boolean);

            const currentPosition = window.scrollY;

            const active = sections.find(
                (section) =>
                    currentPosition >= section.offset &&
                    currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // ===============================
    // LOCK BODY WHEN MOBILE MENU OPEN
    // ===============================

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // ===============================
    // SMOOTH SCROLL
    // ===============================

    const scrollToSection = (e, href) => {
        e.preventDefault();

        const section = document.querySelector(href);

        if (section) {
            const top = section.offsetTop - 100;

            window.scrollTo({
                top,
                behavior: "smooth",
            });
        }

        setIsOpen(false);
    };

    return (
        <>
            {/* =================================
                NAVBAR
            ================================= */}

            <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 pt-4">

                <div
                    className={`
                        max-w-6xl mx-auto
                        transition-all duration-500
                        rounded-2xl
                        border
                        ${
                            scrolled || isOpen
                                ? "bg-[#07111f]/85 backdrop-blur-2xl border-cyan-400/10 shadow-xl shadow-cyan-500/5"
                                : "bg-[#07111f]/40 backdrop-blur-xl border-white/5"
                        }
                    `}
                >

                    <div className="h-16 px-5 sm:px-7 flex items-center justify-between">

                        {/* =================================
                            LOGO
                        ================================= */}

                        <a
                            href="#Home"
                            onClick={(e) =>
                                scrollToSection(e, "#Home")
                            }
                            className="group flex items-center gap-3"
                        >

                            {/* Logo Icon */}

                            <div className="relative">

                                <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full group-hover:bg-cyan-400/30 transition-all duration-300" />

                                <div className="relative w-9 h-9 rounded-xl border border-cyan-400/20 bg-cyan-400/5 flex items-center justify-center">
                                    <span className="text-cyan-400 font-bold text-sm">
                                        N
                                    </span>
                                </div>

                            </div>

                            {/* Logo Text */}

                            <div className="hidden sm:block">

                                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 leading-none mb-1">
                                    Portfolio
                                </p>

                                <p className="text-base font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                    MhmmdAdzim
                                </p>

                            </div>

                        </a>

                        {/* =================================
                            DESKTOP NAVIGATION
                        ================================= */}

                        <div className="hidden md:flex items-center">

                            <div className="flex items-center gap-1">

                                {navItems.map((item) => {
                                    const isActive =
                                        activeSection ===
                                        item.href.substring(1);

                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={(e) =>
                                                scrollToSection(
                                                    e,
                                                    item.href
                                                )
                                            }
                                            className="relative px-4 py-2.5 rounded-xl group"
                                        >

                                            {/* Hover background */}

                                            <span
                                                className={`
                                                    absolute inset-0 rounded-xl
                                                    transition-all duration-300
                                                    ${
                                                        isActive
                                                            ? "bg-cyan-400/10"
                                                            : "bg-transparent group-hover:bg-white/5"
                                                    }
                                                `}
                                            />

                                            {/* Text */}

                                            <span
                                                className={`
                                                    relative z-10 text-sm font-medium
                                                    transition-colors duration-300
                                                    ${
                                                        isActive
                                                            ? "text-cyan-300"
                                                            : "text-gray-400 group-hover:text-white"
                                                    }
                                                `}
                                            >
                                                {item.label}
                                            </span>

                                            {/* Active indicator */}

                                            {isActive && (
                                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                                            )}

                                        </a>
                                    );
                                })}

                            </div>

                            {/* =================================
                                CONTACT MINI BUTTON
                            ================================= */}

                            <div className="ml-4 pl-4 border-l border-white/10">

                                <a
                                    href="#Contact"
                                    onClick={(e) =>
                                        scrollToSection(
                                            e,
                                            "#Contact"
                                        )
                                    }
                                    className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm font-medium hover:-translate-y-0.5 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300"
                                >

                                    Let's Talk

                                    <ArrowUpRight
                                        className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                    />

                                </a>

                            </div>

                        </div>

                        {/* =================================
                            MOBILE MENU BUTTON
                        ================================= */}

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`
                                md:hidden
                                relative w-10 h-10
                                flex items-center justify-center
                                rounded-xl
                                border border-white/10
                                bg-white/5
                                transition-all duration-300
                                ${
                                    isOpen
                                        ? "bg-cyan-400/10 border-cyan-400/20"
                                        : "hover:bg-white/10"
                                }
                            `}
                            aria-label="Toggle menu"
                        >

                            {isOpen ? (
                                <X className="w-5 h-5 text-cyan-300" />
                            ) : (
                                <Menu className="w-5 h-5 text-gray-300" />
                            )}

                        </button>

                    </div>

                    {/* =================================
                        MOBILE MENU
                    ================================= */}

                    <div
                        className={`
                            md:hidden overflow-hidden
                            transition-all duration-500 ease-in-out
                            ${
                                isOpen
                                    ? "max-h-[400px] opacity-100"
                                    : "max-h-0 opacity-0"
                            }
                        `}
                    >

                        <div className="px-4 pb-5 pt-2">

                            <div className="border-t border-white/5 pt-3 space-y-1">

                                {navItems.map((item, index) => {
                                    const isActive =
                                        activeSection ===
                                        item.href.substring(1);

                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={(e) =>
                                                scrollToSection(
                                                    e,
                                                    item.href
                                                )
                                            }
                                            className={`
                                                flex items-center justify-between
                                                px-4 py-3.5
                                                rounded-xl
                                                transition-all duration-300
                                                ${
                                                    isActive
                                                        ? "bg-cyan-400/10 text-cyan-300"
                                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                                }
                                            `}
                                            style={{
                                                transitionDelay: `${
                                                    index * 50
                                                }ms`,
                                            }}
                                        >

                                            <span className="text-sm font-medium">
                                                {item.label}
                                            </span>

                                            {isActive && (
                                                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                                            )}

                                        </a>
                                    );
                                })}

                            </div>

                        </div>

                    </div>

                </div>
            </nav>
        </>
    );
};

export default Navbar;