import { ShieldCheck, BadgeCheck, Lock, FileCheck } from "lucide-react";

export default function ServiceHero() {
  const badges = [
    { icon: <ShieldCheck size={18} />, text: "ISO 27001" },
    { icon: <BadgeCheck size={18} />, text: "ISO 9001" },
    { icon: <Lock size={18} />, text: "ISO 22301" },
    { icon: <FileCheck size={18} />, text: "ISO 27701" },
  ];

  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-indigo-400/20 blur-[140px] animate-pulse"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Glass Badge */}
        <div className="flex justify-center">

          <div
            className="
            rounded-full
            border
            border-white/30
            bg-white/30
            backdrop-blur-2xl
            px-6
            py-3
            shadow-xl
            text-blue-700
            font-semibold
            "
          >
            Enterprise Security Solutions
          </div>

        </div>

        {/* Heading */}

        <h1
          className="
          mt-10
          text-center
          text-5xl
          font-black
          leading-tight
          text-gray-900
          md:text-7xl
          "
        >
          Protect Your Business
          <br />

          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
            With Enterprise Security
          </span>

        </h1>

        {/* Description */}

        <p
          className="
          mx-auto
          mt-8
          max-w-3xl
          text-center
          text-lg
          leading-8
          text-gray-600
          "
        >
          Adescare Technologies provides end-to-end cybersecurity,
          ISO certification consulting, governance, compliance,
          cloud security and business continuity services designed
          to protect modern organizations.
        </p>

        {/* ISO Badges */}

        <div
          className="
          mt-12
          flex
          flex-wrap
          justify-center
          gap-5
          "
        >

          {badges.map((badge, index) => (

            <div
              key={index}
              className="
              group
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/30
              bg-white/25
              px-5
              py-3
              backdrop-blur-2xl
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-1
              hover:scale-105
              hover:bg-blue-500/10
              "
            >

              <span className="text-blue-600">
                {badge.icon}
              </span>

              <span className="font-medium text-gray-800">
                {badge.text}
              </span>

            </div>

          ))}

        </div>

        {/* CTA Buttons */}

        <div
          className="
          mt-14
          flex
          flex-wrap
          justify-center
          gap-5
          "
        >

          <button
            className="
            rounded-2xl
            bg-blue-600
            px-8
            py-4
            font-semibold
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:scale-105
            hover:bg-blue-700
            "
          >
            Explore Services
          </button>

          <button
            className="
            rounded-2xl
            border
            border-white/30
            bg-white/30
            px-8
            py-4
            font-semibold
            text-gray-800
            backdrop-blur-2xl
            shadow-xl
            transition-all
            duration-300
            hover:scale-105
            hover:bg-white/40
            "
          >
            Contact Experts
          </button>

        </div>

      </div>
    </section>
  );
}