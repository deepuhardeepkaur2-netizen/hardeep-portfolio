
const Banner = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-[#eef2f7] pt-4 sm:py4 lg:flex lg:min-h-[calc(37vh-100px)] lg:items-center lg:pt-16"
        >
            <div className="relative mx-auto flex w-full max-w-[1140px] flex-col items-center gap-8 px-5 sm:gap-10 lg:flex-row lg:justify-between lg:gap-[50px]">
                {/* Social Icons */}

                <div className="hidden min-[1240px]:flex absolute left-5 top-0 z-10 gap-3 sm:left-6 sm:gap-4 lg:left-[-58px] lg:top-1/2 lg:-translate-y-1/2 lg:flex-col">  
                  <a
                    href="https://www.linkedin.com/in/hardeep-kaur-38a55232a"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white  p-1 shadow-md transition duration-300 hover:-translate-y-1  sm:h-9 sm:w-9 lg:h-[60px] lg:w-[60px]"
                >
                    <img
                        src="/images/linkedin.png"
                        alt="LinkedIn"
                        className="h-full w-full object-contain"
                    />
                </a>

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white p-1 shadow-md transition duration-300 hover:-translate-y-1  sm:h-9 sm:w-9 lg:h-[60px] lg:w-[60px]"
                    >
                        <img
                            src="/images/github.png"
                            alt="GitHub"
                            className="h-full w-full object-contain"
                        />
                    </a>
                </div>


                {/* Mobile Image - Appears First */}
                <div className="relative flex w-full min-w-0 items-center justify-center pt-12 sm:pt-14 lg:hidden">
                    {/* Purple Background Circle */}
                    <div className="banner-bg absolute left-1/2 top-1/2 aspect-square w-[68%] max-w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#6c2bff] to-[#8c52ff] sm:max-w-[360px]" />

                    {/* Outer Circle */}
                    <div className="banner-outer absolute left-1/2 top-1/2 aspect-square w-[82%] max-w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[14px] border-[rgba(108,43,255,0.08)] sm:max-w-[420px] sm:border-[20px]" />

                    {/* Profile Image */}
                    <img
                        src="/images/my-image.png"
                        alt="Hardeep Kaur - Web Designer and Frontend Developer"
                        className="banner-image relative z-[2] h-auto w-full max-w-[390px] object-contain sm:max-w-[450px]"
                    />
                </div>

                {/* Left Content */}
                <div className="relative z-[3] w-full max-w-[560px] text-center lg:w-[50%] lg:shrink-0 lg:pt-0 lg:text-left">
                    <h1 className="mb-5 text-[36px] leading-[1.15] font-bold text-[#2d266d] sm:text-5xl md:text-6xl lg:mb-6 lg:text-[68px] xl:text-[78px]">
                        Hello, I Am
                        <br />
                        <span className="text-[#6c2bff]">Hardeep Kaur</span>
                    </h1>

                    <div className="mx-auto mb-7 max-w-[520px] text-[18px] leading-[1.8] text-[#6b6b83] sm:text-lg md:text-xl lg:mx-0 lg:mb-10 lg:text-2xl">
                        I create clean, modern and responsive websites with a focus on
                        user experience and creativity.
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 lg:justify-start mb-7">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full bg-[#f7a71d] px-7 py-3.5 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#e99a0b] sm:px-9 sm:py-4 sm:text-lg md:px-[42px] md:py-[18px] md:text-xl"
                        >
                            Hire Me
                        </a>

                        <a
                            href="#portfolio"
                            className="text-base font-semibold text-[#6c2bff] underline underline-offset-4 transition duration-300 hover:text-[#f7a71d] sm:text-lg md:text-xl"
                        >
                            See My Work
                        </a>
                    </div>
                </div>

                {/* Desktop Image - Appears on Right */}
                <div className="relative hidden min-w-0 flex-1 items-center justify-center lg:flex">
                    {/* Purple Background Circle */}
                    <div className="banner-bg absolute left-1/2 top-1/2 aspect-square w-[88%] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#6c2bff] to-[#8c52ff]" />

                    {/* Outer Circle */}
                    <div className="banner-outer absolute left-1/2 top-1/2 aspect-square w-full max-w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[25px] border-[rgba(108,43,255,0.08)] xl:border-[35px]" />

                    {/* Profile Image */}
                    <img
                        src="/images/my-image.png"
                        alt="Hardeep Kaur - Web Designer and Frontend Developer"
                        className="banner-image relative z-[2] h-auto w-full max-w-[520px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
