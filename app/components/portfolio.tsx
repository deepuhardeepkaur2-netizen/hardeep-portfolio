
"use client";

const projects = [
  {
    category: "Astrology & Spiritual",
    title: "Jyotishnow Website",
    image: "/images/jotishnow.png",
    link: "https://jyotishnow.com/",
    number: "01",
  },
  {
    category: "IT & Technology",
    title: "YRJ Technology Website",
    image: "/images/YRJ-image.jpg",
    link: "https://yrjtechnology.com/",
    number: "02",
  },
  {
    category: "E-Commerce & Gemstones",
    title: "Manthan Crystals",
    image: "/images/gemstone.webp",
    link: "https://www.manthancrystals.com/",
    number: "03",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full bg-[#faf9ff] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-[1150px]">

       <div className="mb-10 text-center sm:mb-14">
          <span className="mb-3 inline-block rounded-full bg-[#f1efff] px-5 py-2 text-sm font-semibold text-[#6d5ce8]">
            My Recent Work
          </span>

          <h2 className="text-3xl font-bold text-[#252044] sm:text-4xl md:text-5xl">
            My <span className="text-[#7055e8]">Portfolio</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] text-sm leading-7 text-gray-600 sm:text-base">
            Explore some of my website design and development projects.
          </p>
        </div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[24px] border border-gray-200/80 bg-white p-2 shadow-[0_8px_30px_rgba(40,30,90,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#7055e8]/40 hover:shadow-[0_20px_45px_rgba(80,60,180,0.15)]"
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden rounded-[18px] bg-gray-100 sm:h-[270px]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Project Number */}
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/35 text-xs font-bold text-white backdrop-blur-lg">
                  {project.number}
                </span>

                {/* Category Badge */}
                <span className="absolute bottom-4 left-4 max-w-[calc(100%-32px)] rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-xl sm:text-sm">
                  {project.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex items-center justify-between gap-3 px-4 py-5 sm:px-5">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold text-[#252044] transition-colors duration-300 group-hover:text-[#7055e8] sm:text-xl">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Explore Project
                  </p>
                </div>

                {/* Arrow Button */}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1efff] text-xl text-[#7055e8] transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-[#7055e8] group-hover:text-white">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
