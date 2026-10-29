
const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f5f6fb] py-12 sm:py-16 md:py-[120px]"
    >
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5">

        {/* Section Title */}
        <div className="mb-10 text-center sm:mb-14 md:mb-[70px]">
          <span className="text-lg font-semibold text-[#6c2bff] sm:text-xl">
            My Expertise
          </span>

          <h2 className="mt-3 text-[28px] leading-[1.2] font-bold text-[#2d266d] sm:text-4xl md:text-[52px]">
            Provide Wide Range of
            <br className="hidden sm:block" />
            {" "}Digital Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-[35px]">

          {/* UI/UX Design */}
          <div className="flex flex-col items-center gap-5 rounded-lg bg-white p-5 text-center transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:flex-row sm:items-start sm:gap-7 sm:p-8 sm:text-left md:p-10">
            <div className="flex h-[75px] w-[75px] shrink-0 items-center justify-center rounded-full bg-[#f5f6fb] sm:h-[85px] sm:w-[85px] md:h-[95px] md:w-[95px]">
              <img
                src="/images/uiux.png"
                alt="UI/UX Design"
                className="w-10 object-contain md:w-12"
              />
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 text-xl font-bold text-[#2d266d] sm:text-2xl md:mb-[15px] md:text-[26px]">
                UI/UX Design
              </h3>

              <p className="mb-4 text-sm leading-[1.8] text-[#7b7b93] sm:text-base md:mb-[18px] md:text-lg">
                Modern and user-friendly digital solutions
                designed to grow your business online.
              </p>

              <a
                href="#contact"
                className="text-base font-semibold text-[#f7a71d] transition hover:text-[#6c2bff] sm:text-lg"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Web Design */}
          <div className="flex flex-col items-center gap-5 rounded-lg bg-white p-5 text-center transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:flex-row sm:items-start sm:gap-7 sm:p-8 sm:text-left md:p-10">
            <div className="flex h-[75px] w-[75px] shrink-0 items-center justify-center rounded-full bg-[#f5f6fb] sm:h-[85px] sm:w-[85px] md:h-[95px] md:w-[95px]">
              <img
                src="/images/webdesign.png"
                alt="Web Design"
                className="w-10 object-contain md:w-12"
              />
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 text-xl font-bold text-[#2d266d] sm:text-2xl md:mb-[15px] md:text-[26px]">
                Web Design
              </h3>

              <p className="mb-4 text-sm leading-[1.8] text-[#7b7b93] sm:text-base md:mb-[18px] md:text-lg">
                Clean and responsive website designs
                focused on user experience.
              </p>

              <a
                href="#contact"
                className="text-base font-semibold text-[#f7a71d] transition hover:text-[#6c2bff] sm:text-lg"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Web Development */}
          <div className="flex flex-col items-center gap-5 rounded-lg bg-white p-5 text-center transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[550px] sm:flex-row sm:items-start sm:gap-7 sm:p-8 sm:text-left md:p-10">
            <div className="flex h-[75px] w-[75px] shrink-0 items-center justify-center rounded-full bg-[#f5f6fb] sm:h-[85px] sm:w-[85px] md:h-[95px] md:w-[95px]">
              <img
                src="/images/webdev.png"
                alt="Web Development"
                className="w-10 object-contain md:w-12"
              />
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 text-xl font-bold text-[#2d266d] sm:text-2xl md:mb-[15px] md:text-[26px]">
                Web Development
              </h3>

              <p className="mb-4 text-sm leading-[1.8] text-[#7b7b93] sm:text-base md:mb-[18px] md:text-lg">
                Fast and modern websites built with
                latest development technologies.
              </p>

              <a
                href="#contact"
                className="text-base font-semibold text-[#f7a71d] transition hover:text-[#6c2bff] sm:text-lg"
              >
                Read More
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
    