import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "ISO Readiness", path: "/iso-readiness" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  /* Active Route Detection */
  useEffect(() => {
    const currentIndex = navLinks.findIndex(
      (link) => link.path === location.pathname
    );

    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-[100] w-full px-3 pt-4">

      {/* Main Navbar */}
      <nav
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          overflow-hidden
          rounded-[2rem]
          border
          border-white/20a
          bg-white/10
          px-5
          py-4
          shadow-[0_8px_30px_rgba(255,255,255,0.08)]
          backdrop-blur-[30px]
          md:px-8
          md:py-5
        "
      >

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8ea1d8]/70 via-[#727ac0]/60 to-[#6f6ac9]/70"></div>

        {/* Soft Liquid Glow */}
        <div className="absolute left-[48%] top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-white/20 blur-2xl"></div>

        {/* Logo */}
        <Link
  to="/"
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="
    relative
    z-10
    flex
    items-center
    gap-3

    cursor-pointer

    transition-all
    duration-300

    hover:scale-105
    active:scale-95
  "
>
  <h1
    className="
      text-2xl
      font-black
      tracking-tight
      text-[#2c3244]

      transition-all
      duration-300

      hover:text-[#1f2433]

      md:text-4xl
    "
  >
    Adescare
  </h1>

  {/* Tech Badge */}
  <div
    className="
      rounded-full
      border
      border-white/30
      bg-white/20
      px-4
      py-2
      text-sm
      font-medium
      text-[#30384d]
      shadow-inner
      backdrop-blur-2xl

      transition-all
      duration-300

      hover:bg-white/30

      md:px-5
      md:py-2.5
      md:text-lg
    "
  >
    Tech
  </div>
</Link>
        {/* Desktop Navigation */}
        <div
          className="
            relative
            z-10
            hidden
            items-center
            rounded-full
            border
            border-white/20
            bg-white/10
            p-2
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
            backdrop-blur-3xl
            md:flex
          "
        >

          {/* Moving Liquid Bubble */}
          <div
            className="
              absolute
              top-2
              h-[52px]
              rounded-full
              border
              border-white/30
              bg-white/30
              shadow-[0_4px_20px_rgba(255,255,255,0.15)]
              backdrop-blur-3xl
              transition-all
              duration-500
              ease-out
            "
            style={{
              width: "120px",
              left:
                activeIndex === 0
                  ? "8px"
                  : activeIndex === 1
                  ? "128px"
                  : activeIndex === 2
                  ? "248px"
                  : activeIndex === 3
                  ? "368px"
                  : "488px",
            }}
          >
            {/* Inner Shine */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 to-white/10"></div>

            {/* Active Glow */}
            <div className="absolute inset-0 rounded-full border border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.35)]"></div>
          </div>

          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={index}
                to={link.path}
                onMouseEnter={() => setActiveIndex(index)}
                className={`
                  relative
                  z-10
                  flex
                  h-[52px]
                  w-[120px]
                  items-center
                  justify-center
                  rounded-full
                  text-base
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "text-[#1f2433] scale-105"
                      : "text-[#2f3547] hover:text-[#1f2433]"
                  }
                `}
              >

                {/* Active Route Dot */}
                {isActive && (
                  <span
                    className="
                      absolute
                      bottom-1
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-blue-700
                      shadow-[0_0_10px_rgba(59,130,246,0.7)]
                    "
                  ></span>
                )}

                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 flex flex-col gap-1 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-[#2f3547] transition-all duration-300 ${
              isOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          ></span>

          <span
            className={`h-0.5 w-6 rounded-full bg-[#2f3547] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`h-0.5 w-6 rounded-full bg-[#2f3547] transition-all duration-300 ${
              isOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-[0_8px_30px_rgba(255,255,255,0.08)] backdrop-blur-[30px] transition-all duration-500 md:hidden ${
          isOpen
            ? "max-h-[400px] opacity-100 py-5"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-3 px-4">

          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`
                  w-full
                  rounded-2xl
                  border
                  px-5
                  py-3
                  text-center
                  text-base
                  font-medium
                  backdrop-blur-2xl
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "border-blue-200/40 bg-white/30 text-[#1f2433] shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                      : "border-white/20 bg-white/15 text-[#2f3547] hover:bg-white/25"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}