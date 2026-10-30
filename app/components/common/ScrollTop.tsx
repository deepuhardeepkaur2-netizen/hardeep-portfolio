
"use client";

import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`
        fixed z-50
        right-3 bottom-3
        flex items-center justify-center
        h-20 w-20
        sm:right-5 sm:bottom-5 sm:h-12 sm:w-12
        lg:right-8 lg:bottom-8 lg:h-[70px] lg:w-[70px]
        rounded-full
        border border-white/20
        bg-[#f7a71d]
        text-xl font-bold text-white
        sm:text-2xl lg:text-[34px]
        shadow-lg shadow-black/15
        transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:bg-[#6c2bff]
        active:scale-95
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#6c2bff]
        ${
          show
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-4 opacity-0"
        }
      `}
    >
      <span aria-hidden="true" className="text-[24px]">
        ↑
      </span>
    </button>
  );
};

export default ScrollTop;
