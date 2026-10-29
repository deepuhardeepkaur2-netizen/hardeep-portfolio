
const Portfolio = () => {
  const projects = [
    {
      category: "Web Design",
      title: "E-Commerce Website",
      gradient: "from-[#6c2bff] to-[#9f5cff]",
    },
    {
      category: "UI/UX Design",
      title: "Mobile App Design",
      gradient: "from-[#5630d8] to-[#b06cff]",
    },
    {
      category: "Development",
      title: "Business Portfolio",
      gradient: "from-[#4426a8] to-[#8050ff]",
    },
    {
      category: "Landing Page",
      title: "Startup Website",
      gradient: "from-[#7028d9] to-[#a15cff]",
    },
    {
      category: "Dashboard",
      title: "Admin Panel UI",
      gradient: "from-[#39247e] to-[#7651db]",
    },
    {
      category: "Creative Design",
      title: "Agency Website",
      gradient: "from-[#6124c9] to-[#ad68ff]",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-[#eef2f7] py-20 md:py-[120px]"
    >
      <div className="mx-auto max-w-[1140px] px-5">

        {/* Section Title */}
        <div className="mb-14 text-center md:mb-[70px]">
          <span className="text-lg font-semibold text-[#6c2bff]">
            Creative Works
          </span>

          <h2 className="my-4 text-3xl font-bold text-[#2d266d] sm:text-4xl md:text-[52px]">
            My Latest Projects
          </h2>

          <p className="mx-auto max-w-[620px] text-base leading-[1.8] text-[#7b7b93] md:text-lg">
            Modern and creative websites designed with
            clean UI and smooth user experience.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-[30px] lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative flex h-[320px] cursor-pointer items-end overflow-hidden rounded-[28px] bg-gradient-to-br ${project.gradient} p-7 transition duration-300 hover:-translate-y-[10px] hover:shadow-[0_20px_45px_rgba(45,38,109,0.18)] md:p-[30px]`}
            >
              {/* Top Light Effect */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-[180px] w-[180px] rounded-full bg-white/[0.08] transition duration-500 group-hover:scale-125" />

              {/* Bottom Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

              {/* Project Content */}
              <div className="relative z-[2]">
                <span className="mb-[10px] inline-block text-[15px] font-medium text-[#f7a71d]">
                  {project.category}
                </span>

                <h3 className="text-2xl leading-[1.3] font-bold text-white transition duration-300 group-hover:translate-x-1 sm:text-[30px]">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
