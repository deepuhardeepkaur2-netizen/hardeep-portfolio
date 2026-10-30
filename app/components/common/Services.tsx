
"use client";

import { useState } from "react";

const services = [
  {
    title: "UI/UX Design",
    image: "/images/ux-design.png",
    description:
      "Creating clean and user-friendly UI designs, wireframes, and website layouts using Figma.",
    details: [
      "Website UI design using Figma",
      "Wireframes and page layouts",
      "User-friendly interface design",
      "Responsive design for desktop, tablet, and mobile",
      "Website banners and graphics",
    ],
  },
  {
    title: "Web Design",
    image: "/images/web-designer.png",
    description:
      "Designing modern, attractive, and responsive websites with a focus on clean layouts and user experience.",
    details: [
      "Modern and creative website layouts",
      "Responsive website design",
      "HTML5 and CSS3",
      "Bootstrap and JavaScript",
      "WordPress website design",
    ],
  },
  {
    title: "Web Development",
    image: "/images/web-development.png",
    description:
      "Building responsive and user-friendly websites using HTML, CSS, JavaScript, Bootstrap, and Next.js.",
    details: [
      "Responsive frontend development",
      "HTML, CSS, JavaScript, and jQuery",
      "Bootstrap and Tailwind CSS",
      "Next.js (Basic)",
      "Website maintenance and UI improvements",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f5f6fb] py-12 sm:py-16 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5">

        {/* Section Title */}
        <div className="mb-10 text-center sm:mb-14 lg:mb-[70px]">
          <span className="text-lg font-semibold text-[#6c2bff] sm:text-xl">
            My Expertise
          </span>

          <h2 className="mt-3 text-[28px] leading-[1.2] font-bold text-[#2d266d] sm:text-4xl lg:text-[52px]">
            Provide Wide Range of
            <br className="hidden sm:block" />
            {" "}Digital Services
          </h2>
        </div>
        {/* Modern Service Cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-7 min-[768px]:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative flex flex-col items-center gap-5 overflow-hidden rounded-2xl border border-[#e9e5f5] bg-white p-6 text-center shadow-[0_5px_25px_rgba(45,38,109,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#6c2bff]/30 hover:shadow-[0_18px_45px_rgba(45,38,109,0.12)] min-[992px]:flex-row min-[992px]:items-start min-[992px]:gap-7 min-[992px]:p-8 min-[992px]:text-left xl:p-9 ${index === 2
                  ? "min-[768px]:col-span-2 min-[768px]:mx-auto min-[768px]:w-full min-[768px]:max-w-[550px]"
                  : ""
                }`}
            >
              {/* Decorative Background */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#6c2bff]/[0.04] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#6c2bff]/[0.08]" />

              {/* Service Number */}
              <span className="absolute right-5 top-5 text-[20px] font-bold tracking-widest text-[#c5bfd8] transition-colors group-hover:text-[#6c2bff]">
                0{index + 1}
              </span>

              {/* Service Image */}
              <div className="relative flex h-[85px] w-[85px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f4f0ff] to-[#eae3ff] transition-all duration-500 group-hover:rotate-[-5deg] group-hover:scale-105 min-[992px]:h-[95px] min-[992px]:w-[95px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-11 object-contain transition-transform duration-500 group-hover:scale-110 min-[992px]:w-14"
                />
              </div>

              {/* Service Content */}
              <div className="relative min-w-0 flex-1">
                <h3 className="mb-3 text-xl font-bold text-[#2d266d] transition-colors duration-300 group-hover:text-[#6c2bff] sm:text-2xl lg:text-[25px]">
                  {service.title}
                </h3>

                <p className="mb-5 text-sm leading-7 text-[#7b7b93] sm:text-base">
                  {service.description}
                </p>

                {/* View Details Button */}
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#f4f0ff] px-4 py-2.5 text-sm font-semibold text-[#6c2bff] transition-all duration-300 hover:gap-4 hover:bg-[#6c2bff] hover:text-white"
                >
                  View Details
                  <span className="text-lg leading-none">→</span>
                </button>
              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#6c2bff] to-[#b58aff] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Popup */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-6"
          onClick={() => setSelectedService(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="relative w-full max-w-[500px] rounded-xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Close popup"
              className="absolute right-3 top-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-[#2d266d] transition hover:text-[#6c2bff]"
            >
              <span className="block text-[28px] leading-[1] font-light">
                ×
              </span>
            </button>

            <span className="text-sm font-semibold text-[#6c2bff]">
              My Expertise
            </span>

            <h3
              id="service-modal-title"
              className="mb-5 mt-2 pr-8 text-2xl font-bold text-[#2d266d] sm:text-3xl"
            >
              {selectedService.title}
            </h3>

            <p className="mb-5 text-sm leading-7 text-[#7b7b93] sm:text-base">
              {selectedService.description}
            </p>

            <h4 className="mb-3 font-bold text-[#2d266d]">
              What I Offer:
            </h4>

            <ul className="space-y-3">
              {selectedService.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-sm text-[#7b7b93] sm:text-base"
                >
                  <span className="font-bold text-[#6c2bff]">✓</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setSelectedService(null)}
              className="mt-7 inline-flex items-center justify-center rounded-md bg-[#6c2bff] px-6 py-3 font-semibold text-white transition hover:bg-[#f7a71d]"
            >
              Contact Me →
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
