import React, { useEffect, memo } from "react";
import {
    User,
    GraduationCap,
    Code2,
    Lightbulb,
    Target,
    BriefcaseBusiness,
    ArrowUpRight,
    CheckCircle2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            offset: 50,
        });
    }, []);

    return (
        <section
            id="About"
            className="relative min-h-screen py-24 md:py-32 px-[6%] lg:px-[10%] bg-[#050B14] text-white overflow-hidden"
        >

            {/* =================================
                BACKGROUND
            ================================= */}

            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute top-20 left-[-150px] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px]" />

                <div className="absolute bottom-20 right-[-150px] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px]" />

            </div>


            <div className="relative z-10 max-w-6xl mx-auto">

                {/* =================================
                    HEADER
                ================================= */}

                <div
                    className="mb-14"
                    data-aos="fade-up"
                >

                    <div className="flex items-center gap-3 mb-4">

                        <div className="w-10 h-[1px] bg-cyan-400" />

                        <span className="text-cyan-400 text-sm uppercase tracking-[0.3em]">
                            About Me
                        </span>

                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        More than just{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            code.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed">
                        Mengenal lebih jauh tentang perjalanan, minat,
                        dan hal-hal yang sedang saya kembangkan.
                    </p>

                </div>


                {/* =================================
                    MAIN GRID
                ================================= */}

                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">


                    {/* =================================
                        LEFT - INTRO
                    ================================= */}

                    <div
                        className="relative rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl p-7 md:p-9 overflow-hidden"
                        data-aos="fade-right"
                    >

                        {/* Glow */}

                        <div className="absolute top-0 right-0 w-52 h-52 bg-cyan-400/5 rounded-full blur-3xl" />

                        <div className="relative z-10">

                            {/* Icon */}

                            <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-7">

                                <User className="w-6 h-6 text-cyan-400" />

                            </div>


                            <p className="text-cyan-400 text-sm font-medium mb-3">
                                WHO I AM
                            </p>

                            <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                Muhammad Nur Adzim
                            </h3>

                            <p className="text-gray-400 mt-5 leading-relaxed text-base md:text-lg">
                                Saya adalah mahasiswa Informatika yang memiliki
                                ketertarikan pada pengembangan website,
                                software development, dan teknologi digital.
                            </p>

                            <p className="text-gray-400 mt-4 leading-relaxed">
                                Saya senang mempelajari teknologi baru,
                                membangun project dari sebuah ide, dan
                                terus meningkatkan kemampuan melalui
                                pengalaman dan proses belajar.
                            </p>


                            {/* Quote */}

                            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-cyan-400/5 to-emerald-400/5 border border-white/5">

                                <p className="text-gray-300 italic">
                                    "Building. Learning. Improving."
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* =================================
                        RIGHT - PROFILE
                    ================================= */}

                    <div
                        className="relative rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl p-7 md:p-9 overflow-hidden"
                        data-aos="fade-left"
                    >

                        <div className="absolute bottom-0 right-0 w-52 h-52 bg-emerald-400/5 rounded-full blur-3xl" />

                        <div className="relative z-10">

                            <p className="text-emerald-400 text-sm font-medium mb-6">
                                PROFILE
                            </p>


                            {/* Education */}

                            <div className="flex gap-4 pb-7 border-b border-white/10">

                                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">

                                    <GraduationCap className="w-5 h-5 text-cyan-400" />

                                </div>

                                <div>

                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Education
                                    </p>

                                    <h4 className="text-base md:text-lg font-medium text-white mt-1">
                                        Mahasiswa
                                    </h4>

                                    <p className="text-sm text-gray-400 mt-1">
                                        Universitas Dian Nusantara
                                    </p>

                                </div>

                            </div>


                            {/* Focus */}

                            <div className="flex gap-4 py-7 border-b border-white/10">

                                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">

                                    <Code2 className="w-5 h-5 text-emerald-400" />

                                </div>

                                <div>

                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Focus
                                    </p>

                                    <h4 className="text-base md:text-lg font-medium text-white mt-1">
                                        Web Development
                                    </h4>

                                    <p className="text-sm text-gray-400 mt-1">
                                        Frontend & Software Development
                                    </p>

                                </div>

                            </div>


                            {/* Mindset */}

                            <div className="flex gap-4 pt-7">

                                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">

                                    <Lightbulb className="w-5 h-5 text-cyan-400" />

                                </div>

                                <div>

                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Mindset
                                    </p>

                                    <h4 className="text-base md:text-lg font-medium text-white mt-1">
                                        Continuous Learning
                                    </h4>

                                    <p className="text-sm text-gray-400 mt-1">
                                        Learn, build, improve.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================
                    WHAT I DO
                ================================= */}

                <div className="mt-8">

                    <div
                        className="mb-7"
                        data-aos="fade-up"
                    >

                        <p className="text-cyan-400 text-sm uppercase tracking-[0.25em]">
                            What I Do
                        </p>

                        <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                            Things I enjoy building
                        </h3>

                    </div>


                    <div className="grid md:grid-cols-3 gap-5">


                        {/* WEB */}

                        <div
                            className="group p-6 rounded-2xl border border-white/10 bg-white/[0.025] hover:bg-cyan-400/[0.04] hover:border-cyan-400/20 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >

                            <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-5">

                                <Code2 className="w-5 h-5 text-cyan-400" />

                            </div>

                            <h4 className="text-lg font-semibold">
                                Web Development
                            </h4>

                            <p className="text-sm text-gray-400 leading-relaxed mt-3">
                                Membuat website yang responsif,
                                modern, dan mudah digunakan.
                            </p>

                            <div className="flex items-center gap-2 mt-5 text-xs text-cyan-400">
                                <CheckCircle2 className="w-4 h-4" />
                                React • JavaScript
                            </div>

                        </div>


                        {/* PROBLEM SOLVING */}

                        <div
                            className="group p-6 rounded-2xl border border-white/10 bg-white/[0.025] hover:bg-emerald-400/[0.04] hover:border-emerald-400/20 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >

                            <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mb-5">

                                <Target className="w-5 h-5 text-emerald-400" />

                            </div>

                            <h4 className="text-lg font-semibold">
                                Problem Solving
                            </h4>

                            <p className="text-sm text-gray-400 leading-relaxed mt-3">
                                Mencari solusi yang sederhana,
                                efektif, dan dapat diterapkan.
                            </p>

                            <div className="flex items-center gap-2 mt-5 text-xs text-emerald-400">
                                <CheckCircle2 className="w-4 h-4" />
                                Logic • Algorithms
                            </div>

                        </div>


                        {/* PROJECT */}

                        <div
                            className="group p-6 rounded-2xl border border-white/10 bg-white/[0.025] hover:bg-cyan-400/[0.04] hover:border-cyan-400/20 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >

                            <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-5">

                                <BriefcaseBusiness className="w-5 h-5 text-cyan-400" />

                            </div>

                            <h4 className="text-lg font-semibold">
                                Real Projects
                            </h4>

                            <p className="text-sm text-gray-400 leading-relaxed mt-3">
                                Mengubah ide menjadi project
                                nyata yang bisa digunakan.
                            </p>

                            <div className="flex items-center gap-2 mt-5 text-xs text-cyan-400">
                                <CheckCircle2 className="w-4 h-4" />
                                Build • Test • Improve
                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================
                    EXPERIENCE
                ================================= */}

                <div className="mt-16">

                    <div
                        className="mb-8"
                        data-aos="fade-up"
                    >

                        <p className="text-emerald-400 text-sm uppercase tracking-[0.25em]">
                            Experience
                        </p>

                        <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                            My journey
                        </h3>

                    </div>


                    <div className="relative">

                        {/* Timeline Line */}

                        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/40 via-emerald-400/30 to-transparent hidden sm:block" />


                        {/* EXPERIENCE 1 */}

                        <div
                            className="relative flex gap-5 mb-6"
                            data-aos="fade-up"
                        >

                            <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-[#050B14] border border-cyan-400/50 flex items-center justify-center">

                                <span className="w-2 h-2 rounded-full bg-cyan-400" />

                            </div>

                            <div className="flex-1 p-6 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-cyan-400/20 transition-all duration-300">

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                                    <div>

                                        <h4 className="text-lg font-semibold">
                                            Maintenance Intern
                                        </h4>

                                        <p className="text-cyan-400 text-sm mt-1">
                                            PT. Bukaka Forging Industries
                                        </p>

                                    </div>

                                    <span className="text-xs text-gray-500">
                                        Internship
                                    </span>

                                </div>

                                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                                    Membantu proses pemeliharaan berkala,
                                    pemeriksaan kondisi mesin dan peralatan
                                    produksi, serta berkoordinasi dengan
                                    tim maintenance.
                                </p>

                            </div>

                        </div>


                        {/* EXPERIENCE 2 */}

                        <div
                            className="relative flex gap-5"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >

                            <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-[#050B14] border border-emerald-400/50 flex items-center justify-center">

                                <span className="w-2 h-2 rounded-full bg-emerald-400" />

                            </div>

                            <div className="flex-1 p-6 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-emerald-400/20 transition-all duration-300">

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                                    <div>

                                        <h4 className="text-lg font-semibold">
                                            Warehouse / Production Support
                                        </h4>

                                        <p className="text-emerald-400 text-sm mt-1">
                                            PT. Haier Electrical Appliances Indonesia
                                        </p>

                                    </div>

                                    <span className="text-xs text-gray-500">
                                        Experience
                                    </span>

                                </div>

                                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                                    Bertanggung jawab dalam proses
                                    pengantaran material atau barang
                                    yang belum selesai ke operator produksi
                                    sesuai kebutuhan proses produksi.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================
                    CTA
                ================================= */}

                <div
                    className="mt-14 flex justify-center"
                    data-aos="fade-up"
                >

                    <a
                        href="#Portofolio"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 hover:bg-cyan-400/10 transition-all duration-300"
                    >

                        Explore my projects

                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

                    </a>

                </div>

            </div>

        </section>
    );
};

export default memo(AboutPage);