
const Footer = () => {
  return (
    <footer className="overflow-hidden bg-[#211d4f] px-5 pt-[50px] pb-10">
      <div className="mx-auto max-w-[1140px] text-center">
        {/* Footer Logo */}
        <div className="mb-[45px]">
          <a href="/" aria-label="Home">
            <img
          src="./../images/logo.png"
              alt="Logo"
              className="mx-auto h-[62px] w-[135px] object-contain"
            />
          </a>
        </div>

        {/* Footer Menu */}
        <nav aria-label="Footer navigation">
          <ul className="mb-[45px] flex flex-wrap items-center justify-center gap-x-[26px] gap-y-4">
            <li>
              <a
                href="/"
                className="text-[18px] text-[#ffffffb5] no-underline transition-colors duration-300 hover:text-[#f7a71d] sm:text-xl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[18px] text-[#ffffffb5] no-underline transition-colors duration-300 hover:text-[#f7a71d] sm:text-xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-[18px] text-[#ffffffb5] no-underline transition-colors duration-300 hover:text-[#f7a71d] sm:text-xl"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-[18px] text-[#ffffffb5] no-underline transition-colors duration-300 hover:text-[#f7a71d] sm:text-xl"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[18px] text-[#ffffffb5] no-underline transition-colors duration-300 hover:text-[#f7a71d] sm:text-xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="mb-10 flex items-center justify-center gap-[22px]">
          <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white  p-1 shadow-md transition duration-300 hover:-translate-y-1  sm:h-12 sm:w-12 lg:h-[60px] lg:w-[60px]"
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
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1 shadow-md transition duration-300 hover:-translate-y-1  sm:h-12 sm:w-12 lg:h-[60px] lg:w-[60px]"
                    >
                        <img
                            src="/images/github.png"
                            alt="GitHub"
                            className="h-full w-full object-contain"
                        />
                    </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-[35px]">
          <p className="text-[14px] leading-relaxed text-[#ffffff99] sm:text-[18px]">
            Copyright © 2026 Hardeep Kaur. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
