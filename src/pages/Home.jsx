import GlassImage from "../components/GlassImage";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const iso27001Ref = useRef([]);
  // const iso9001Ref = useRef([]);

  useEffect(() => {
    const cards = [...iso27001Ref.current];

    cards.forEach((card) => {
      if (!card) return;

      gsap.fromTo(
        card,

        {
          opacity: 0,
          y: 120,
          scale: 0.7,
          rotateX: 25,
          filter: "blur(10px)",
        },

        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",

          duration: 1.3,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full text-gray-800">
      {/* ================= HERO SECTION ================= */}

      <section
        className="
    relative
    overflow-hidden
    rounded-[2rem]
    bg-gradient-to-br
    from-[#0f172a]
    via-[#172554]
    to-[#312e81]
    text-white
  "
      >
        {/* Background Glow */}
        <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute right-[-120px] bottom-[-120px] h-[350px] w-[350px] rounded-full bg-indigo-500/20 blur-3xl"></div>

        <div
          className="
      relative
      z-10
      mx-auto
      grid
      max-w-7xl
      items-center
      gap-16
      px-6
      py-28
      md:grid-cols-2
    "
        >
          {/* LEFT CONTENT */}

          <div className="space-y-8">
            {/* Floating Certification Badges */}

            <div className="flex flex-wrap gap-4">
              <div
                className="
            animate-[float_5s_ease-in-out_infinite]

            rounded-full
            border
            border-white/20
            bg-white/10

            px-5
            py-3

            text-sm
            font-medium

            shadow-xl
            backdrop-blur-2xl
          "
              >
                🔐 ISO 27001 Certified Guidance
              </div>

              <div
                className="
            animate-[float_6s_ease-in-out_infinite]

            rounded-full
            border
            border-white/20
            bg-white/10

            px-5
            py-3

            text-sm
            font-medium

            shadow-xl
            backdrop-blur-2xl
          "
              >
                📋 ISO 27001 Implementing and Auditing
              </div>
            </div>

            {/* Heading */}

            <h1
              className="
          text-5xl
          font-black
          leading-tight
          md:text-7xl
        "
            >
              Business Consulting & Advisory.
              <br />
              Scale Your
              <br />
              Business with
              <span className="block bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                ISO 27001
              </span>
            </h1>

            {/* Description */}

            <p
              className="
          max-w-2xl
          text-lg
          leading-relaxed
          text-gray-300
        "
            >
              Adescare Technologies INC helps businesses implement ISO 27001
              Information Security Management Systems with enterprise-grade
              cybersecurity and compliance solutions.
            </p>

            {/* CTA */}

            <div className="flex flex-wrap gap-5">
              <button
                className="
            rounded-2xl
            bg-blue-500
            px-8
            py-4
            font-semibold

            transition-all
            duration-300

            hover:scale-105
            hover:bg-blue-600
            hover:shadow-[0_10px_40px_rgba(59,130,246,.35)]
          "
              >
                Get Started
              </button>

              <button
                className="
            rounded-2xl
            border
            border-white/20
            bg-white/10

            px-8
            py-4

            font-semibold

            backdrop-blur-2xl

            transition-all
            duration-300

            hover:bg-white/20
            hover:scale-105
          "
              >
                Explore Services
              </button>
            </div>

            {/* Small Stats */}

            <div className="flex flex-wrap gap-8 pt-6">
              <div>
                <h3 className="text-3xl font-bold text-blue-300">100%</h3>

                <p className="text-gray-400">Compliance Support</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-indigo-300">24/7</h3>

                <p className="text-gray-400">Security Assistance</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">
            {/* Glass Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 blur-3xl"></div>

            <GlassImage
              src="/images/Image1.jpg"
              alt="Technology Team"
              className="
          relative
          z-10
          rounded-[2rem]
          border
          border-white/20
          shadow-[0_30px_80px_rgba(0,0,0,.35)]
        "
            />
          </div>
        </div>
      </section>

      {/* ================= NEW 3D ISO ADVANTAGES SECTION ================= */}

      <section className="relative overflow-hidden py-24 bg-white">
        {/* Background glow */}
        <div className="absolute top-0 left-[-100px] h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-[-100px] h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">ISO 27001 Advantages</h2>

            <p className="mt-4 text-gray-600">
              Explore why businesses trust ISO standards
            </p>
          </div>

          {/* 3D cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔐",
                title: "Better Security",
                desc: "Protect sensitive business data.",
              },

              {
                icon: "🌍",
                title: "Global Trust",
                desc: "Build stronger customer confidence.",
              },

              {
                icon: "🛡️",
                title: "Risk Reduction",
                desc: "Reduce cyber threats proactively.",
              },

              {
                icon: "📜",
                title: "Compliance",
                desc: "Meet international standards.",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (iso27001Ref.current[index] = el)}
                className="
group
relative
overflow-hidden
rounded-[2rem]
border
border-white/20
bg-white/30
p-8
shadow-2xl
backdrop-blur-2xl

transform-gpu
will-change-transform

transition-all
duration-500

hover:-translate-y-4
hover:scale-105
hover:shadow-[0_25px_60px_rgba(59,130,246,.2)]
"
              >
                {/* Frosted reflection animation */}
                <div
                  className="
                  absolute
                  left-[-150%]
                  top-0
                  h-full
                  w-[70%]
                  rotate-12
                  bg-white/20
                  blur-xl
                  transition-all
                  duration-1000
                  group-hover:left-[150%]
                "
                ></div>

                {/* Icon */}
                <div
                  className="
                  relative
                  z-10
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-500/10
                  text-4xl
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-12
                "
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-bold mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ISO 9001 SECTION ================= */}

      {/* Remove the iso 9001 section if you don't need it */}

      {/* ================= SERVICES SECTION (EXISTING) ================= */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* ISO */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <GlassImage
                src="/images/Image2.jpg"
                alt="Recruitment"
                className="rounded-t-xl h-52 w-full object-cover"
              />

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">
                  ISO 27001 Implementing and Auditing
                </h3>

                <p className="text-gray-600">
                  Adescare Technologies provides ISO implementation and auditing
                  services.
                </p>
              </div>
            </div>

            {/* TPRM */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <GlassImage
                src="/images/Image3.jpg"
                alt="TPRM"
                className="rounded-t-xl h-52 w-full object-cover"
              />

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">
                  Third-Party Risk Management
                </h3>

                <p className="text-gray-600">
                  Identify and mitigate third-party risks.
                </p>
              </div>
            </div>

            {/* Cyber */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <GlassImage
                src="/images/Image4.jpg"
                alt="Cybersecurity"
                className="rounded-t-xl h-52 w-full object-cover"
              />

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">
                  Cybersecurity Solutions
                </h3>

                <p className="text-gray-600">
                  Protect digital assets using advanced security strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION (EXISTING) ================= */}

      <section className="bg-blue-900 text-white py-16 text-center rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Secure & Scale Your Business?
        </h2>

        <p className="text-gray-200 mb-6">
          Partner with Adescare Technologies INC.
        </p>

        <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Talk to Us
        </button>
      </section>
    </div>
  );
}
