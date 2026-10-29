
"use client";

import { useRef, useState } from "react";

const About = () => {
    const [activePage, setActivePage] = useState(0);
    const skillsRef = useRef<HTMLDivElement>(null);

    const skills = [
        { name: "HTML", percentage: "95%", color: "#f7a71d", borderColor: "border-t-[#f7a71d] border-r-[#f7a71d]" },
        { name: "CSS", percentage: "90%", color: "#6c2bff", borderColor: "border-t-[#6c2bff] border-r-[#6c2bff]" },
        { name: "SCSS", percentage: "85%", color: "#cc6699", borderColor: "border-t-[#cc6699] border-r-[#cc6699]" },
        { name: "Bootstrap", percentage: "92%", color: "#7952b3", borderColor: "border-t-[#7952b3] border-r-[#7952b3]" },
        { name: "Tailwind CSS", percentage: "90%", color: "#38bdf8", borderColor: "border-t-[#38bdf8] border-r-[#38bdf8]" },
        { name: "JavaScript", percentage: "85%", color: "#facc15", borderColor: "border-t-[#facc15] border-r-[#facc15]" },
        { name: "jQuery", percentage: "85%", color: "#0769ad", borderColor: "border-t-[#0769ad] border-r-[#0769ad]" },
        { name: "WordPress", percentage: "85%", color: "#21759b", borderColor: "border-t-[#21759b] border-r-[#21759b]" },
        { name: "Next.js", percentage: "80%", color: "#3d3a72", borderColor: "border-t-[#3d3a72] border-r-[#3d3a72]" },
        { name: "Figma", percentage: "90%", color: "#f24e1e", borderColor: "border-t-[#f24e1e] border-r-[#f24e1e]" },
        { name: "PSD to HTML", percentage: "90%", color: "#31a8ff", borderColor: "border-t-[#31a8ff] border-r-[#31a8ff]" },
        { name: "Logo Design", percentage: "85%", color: "#e6a817", borderColor: "border-t-[#e6a817] border-r-[#e6a817]" },
    ];

    const visibleCount = 3;
    const totalPages = Math.ceil(skills.length / visibleCount);

    const handleScroll = () => {
        const container = skillsRef.current;
        if (!container) return;

        const cardWidth = container.clientWidth / visibleCount;
        const page = Math.round(container.scrollLeft / (cardWidth * visibleCount));
        setActivePage(Math.min(page, totalPages - 1));
    };

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
            className="overflow-hidden bg-[#eef2f7] py-12 sm:py-20 md:py-[120px]"
        >
            <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-10 px-4 sm:gap-12 sm:px-5 lg:flex-row lg:gap-[70px]">

                {/* Skills Carousel */}
                <div className="w-full min-w-0 flex-1">

                    <div
                        ref={skillsRef}
                        onScroll={handleScroll}
                        className="grid grid-flow-col auto-cols-[calc((100%-12px)/2)] grid-rows-3 gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 sm:auto-cols-[calc((100%-24px)/2)] sm:gap-6"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex h-[130px] snap-start flex-col items-center justify-center rounded-2xl bg-white p-2 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:h-[150px] sm:rounded-3xl sm:p-4"
                            >
                                <div
                                    className={`mb-2 flex h-12 w-12 rotate-[-20deg] items-center justify-center rounded-full border-[4px] border-[#e6edf7] sm:mb-[14px] sm:h-16 sm:w-16 sm:border-[5px] ${skill.borderColor}`}
                                >
                                    <span
                                        className="rotate-[20deg] text-base font-bold sm:text-xl"
                                        style={{ color: skill.color }}
                                    >
                                        {skill.percentage}
                                    </span>
                                </div>

                                <h3 className="text-xs leading-tight font-semibold text-[#2d2d2d] sm:text-base">
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-5 flex items-center justify-center gap-2">
                        {Array.from({ length: 2 }).map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => goToPage(index)}
                                aria-label={`Go to skills page ${index + 1}`}
                                aria-current={activePage === index ? "true" : undefined}
                                className={`h-2.5 rounded-full transition-all duration-300 ${activePage === index
                                        ? "w-7 bg-[#6c2bff]"
                                        : "w-2.5 bg-[#c7c9d8] hover:bg-[#6c2bff]"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* About Content */}
                <div className="w-full max-w-[520px] flex-1">
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
                        className="inline-flex items-center justify-center rounded-full bg-[#f7a71d] px-8 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 sm:text-lg"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
