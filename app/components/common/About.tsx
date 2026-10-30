
"use client";

import { useEffect, useRef, useState } from "react";

const About = () => {
    const [activePage, setActivePage] = useState(0);
    const [visibleCount, setVisibleCount] = useState(6);

    const skillsRef = useRef<HTMLDivElement>(null);

    const skills = [
        { name: "HTML", percentage: 95, color: "#f7a71d" },
        { name: "CSS", percentage: 85, color: "#6c2bff" },
        { name: "SCSS", percentage: 85, color: "#cc6699" },
        { name: "Bootstrap", percentage: 92, color: "#7952b3" },
        { name: "Tailwind CSS", percentage: 80, color: "#38bdf8" },
        { name: "JavaScript", percentage: 68, color: "#eab308" },
        { name: "jQuery", percentage: 75, color: "#0769ad" },
        { name: "WordPress", percentage: 75, color: "#21759b" },
        { name: "Next.js", percentage: 50, color: "#3d3a72" },
        { name: "Figma", percentage: 70, color: "#f24e1e" },
        { name: "PSD to HTML", percentage: 90, color: "#31a8ff" },
        { name: "Logo Design", percentage: 58, color: "#e6a817" },
    ];

    // Responsive cards per page
    useEffect(() => {
        const updateVisibleCount = () => {
            const isMobile = window.innerWidth <= 480;

            setVisibleCount(isMobile ? 4 : 6);
            setActivePage(0);

            if (skillsRef.current) {
                skillsRef.current.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            }
        };

        updateVisibleCount();

        window.addEventListener("resize", updateVisibleCount);

        return () => {
            window.removeEventListener("resize", updateVisibleCount);
        };
    }, []);

    const totalPages = Math.ceil(skills.length / visibleCount);

    // Update active pagination on scroll
    const handleScroll = () => {
        const container = skillsRef.current;
        if (!container) return;

        const page = Math.round(
            container.scrollLeft / container.clientWidth
        );

        setActivePage(Math.min(page, totalPages - 1));
    };

    // Pagination click
    const goToPage = (page: number) => {
        const container = skillsRef.current;
        if (!container) return;

        container.scrollTo({
            left: page * container.clientWidth,
            behavior: "smooth",
        });

        setActivePage(page);
    };

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#eef2f7] py-12 sm:py-20 md:py-[120px]"
        >
            {/* Background Decoration */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#6c2bff]/[0.05] blur-3xl" />

            <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#f7a71d]/[0.07] blur-3xl" />

            <div className="relative mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-10 px-4 sm:gap-12 sm:px-5 lg:flex-row lg:items-center lg:gap-[70px]">

                {/* Skills Carousel */}
                <div className="w-full min-w-0 flex-1">

                    {/* Skills Grid */}
                    <div
                        ref={skillsRef}
                        onScroll={handleScroll}
                        className="grid grid-flow-col auto-cols-[calc((100%-12px)/2)] grid-rows-2 gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 min-[481px]:auto-cols-[calc((100%-24px)/3)] sm:auto-cols-[calc((100%-48px)/3)] sm:gap-6 lg:auto-cols-[calc((100%-24px)/2)] lg:grid-rows-3"
                        style={{
                            scrollbarWidth: "none",
                        }}
                    >
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="group relative flex h-[155px] snap-start flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-3 text-center shadow-[0_8px_25px_rgba(45,38,109,0.04)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white hover:bg-white hover:shadow-[0_18px_40px_rgba(45,38,109,0.12)] sm:h-[170px] sm:rounded-3xl sm:p-4"
                            >
                                {/* Card Background Effect */}
                                <div
                                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-[0.06] blur-2xl transition-all duration-500 group-hover:scale-[2.5] group-hover:opacity-20"
                                    style={{
                                        backgroundColor: skill.color,
                                    }}
                                />

                                {/* Skill Number */}
                                <span className="absolute right-3 top-3 text-[10px] font-bold tracking-wider text-[#c5c3d2]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* Circular Progress */}
                                <div
                                    className="relative mb-3 flex h-[65px] w-[65px] items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110 sm:mb-4 sm:h-[78px] sm:w-[78px]"
                                    style={{
                                        background: `conic-gradient(${skill.color} ${skill.percentage * 3.6}deg, #edf0f6 0deg)`,
                                    }}
                                >
                                    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white shadow-inner sm:h-[66px] sm:w-[66px]">
                                        <span
                                            className="text-sm font-extrabold sm:text-base"
                                            style={{
                                                color: skill.color,
                                            }}
                                        >
                                            {skill.percentage}%
                                        </span>
                                    </div>
                                </div>

                                {/* Skill Name */}
                                <h3 className="relative text-sm font-bold text-[#2d266d] transition-colors duration-300 group-hover:text-[#f7a71d] sm:text-base">
                                    {skill.name}
                                </h3>

                                {/* Bottom Accent */}
                                <div
                                    className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full transition-all duration-500 group-hover:w-1/2"
                                    style={{
                                        backgroundColor: skill.color,
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 flex items-center justify-center gap-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => goToPage(index)}
                                aria-label={`Go to skills page ${index + 1}`}
                                aria-current={
                                    activePage === index ? "true" : undefined
                                }
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    activePage === index
                                        ? "w-8 bg-[#f7a71d]"
                                        : "w-2.5 bg-[#c7c9d8] hover:bg-[#f7a71d]"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* About Content */}
                <div className="w-full flex-1 text-left">
                    <span className="text-base font-semibold text-[#6c2bff] sm:text-lg">
                        My Skills
                    </span>

                    <h2 className="my-[18px] mb-6 text-3xl leading-[1.2] font-bold text-[#2d266d] sm:text-4xl md:text-[52px]">
                        Beautiful &amp; Unique
                        <br className="hidden sm:block" />
                        {" "}Digital Experiences
                    </h2>

                    <p className="mb-[22px] text-base leading-[1.9] text-[#7b7b93] md:text-lg">
                        I create modern and responsive websites focused on user
                        experience, creativity and clean design.
                    </p>

                    <p className="mb-[22px] text-base leading-[1.9] text-[#7b7b93] md:text-lg">
                        My skills include frontend development, WordPress, Figma UI
                        design, PSD-to-HTML conversion, and creative logo design.
                    </p>

                    <a
                        href="/images/resume(%20Web%20Designer).png"
                        download="Hardeep-Kaur-Resume.png"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f7a71d] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_20px_rgba(247,167,29,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#e99a0b] hover:shadow-[0_12px_28px_rgba(247,167,29,0.32)] sm:text-lg"
                    >
                        Download Resume
                        <span aria-hidden="true">↓</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
