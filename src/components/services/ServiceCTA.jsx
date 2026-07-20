import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* Background Glow */}
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-400/20 blur-[140px]"></div>

      <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-[140px]"></div>

      <div className="relative z-10 mx-auto max-w-6xl">

        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/30
          bg-white/30
          backdrop-blur-3xl
          shadow-[0_30px_80px_rgba(59,130,246,0.12)]
          p-12
          md:p-20
          text-center
          "
        >

          {/* Glass Reflection */}
          <div
            className="
            absolute
            left-[-120%]
            top-0
            h-full
            w-[40%]
            rotate-12
            bg-white/20
            blur-2xl
            animate-[shine_8s_linear_infinite]
            "
          ></div>

          {/* Floating Bubble */}
          <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl"></div>

          <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-indigo-400/10 blur-3xl"></div>

          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-white/30 bg-white/30 px-5 py-2 text-blue-700 backdrop-blur-xl shadow-lg">

            Enterprise Security

          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl md:text-6xl font-black text-gray-900">

            Ready To Secure
            <br />

            Your Business?

          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">

            Partner with Adescare Technologies for enterprise-grade
            cybersecurity, ISO certifications, governance, compliance,
            cloud security and risk management services.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/contact"
              className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              bg-blue-600
              px-8
              py-4
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
              hover:bg-blue-700
              "
            >

              <PhoneCall size={20} />

              Contact Us

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </Link>

            <a
              href="mailto:faraz@adescaretech.com"
              className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/30
              bg-white/30
              px-8
              py-4
              text-gray-800
              backdrop-blur-2xl
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white/40
              "
            >

              <Mail size={20} />

              Email Us

            </a>

          </div>

          {/* Bottom Tags */}

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            {[
              "ISO 27001",
              "ISO 9001",
              "ISO 22301",
              "ISO 27701",
              "Cybersecurity",
              "Compliance",
            ].map((item) => (

              <div
                key={item}
                className="
                rounded-full
                border
                border-white/30
                bg-white/20
                px-5
                py-2
                text-sm
                font-medium
                text-gray-700
                backdrop-blur-xl
                "
              >

                {item}

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}