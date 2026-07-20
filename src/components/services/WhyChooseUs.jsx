import {
  ShieldCheck,
  Award,
  Clock3,
  Users,
} from "lucide-react";

export default function WhyChooseUs() {
  const stats = [
    {
      icon: <ShieldCheck size={34} />,
      number: "100%",
      title: "Security Focused",
      color: "text-blue-600",
    },
    {
      icon: <Award size={34} />,
      number: "4+",
      title: "ISO Standards",
      color: "text-green-600",
    },
    {
      icon: <Clock3 size={34} />,
      number: "24×7",
      title: "Support",
      color: "text-indigo-600",
    },
    {
      icon: <Users size={34} />,
      number: "Enterprise",
      title: "Consulting",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-300/10 blur-[140px]" />

      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-300/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-white/30 bg-white/30 px-5 py-2 text-sm font-semibold text-blue-700 backdrop-blur-xl shadow-lg">
            Why Choose Adescare
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900">
            Trusted Security Partner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-8">
            We combine international security standards, enterprise-grade
            consulting, and practical cybersecurity expertise to help
            organizations build resilient and compliant digital ecosystems.
          </p>

        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/30
                bg-white/30
                p-8
                backdrop-blur-3xl
                shadow-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-blue-200/50
              "
            >

              {/* Glass Reflection */}

              <div
                className="
                  absolute
                  left-[-120%]
                  top-0
                  h-full
                  w-[45%]
                  rotate-12
                  bg-white/20
                  blur-xl
                  transition-all
                  duration-1000
                  group-hover:left-[140%]
                "
              />

              {/* Icon */}

              <div
                className={`
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/40
                  backdrop-blur-xl
                  ${item.color}
                `}
              >
                {item.icon}
              </div>

              {/* Number */}

              <h3 className="text-4xl font-black text-gray-900">
                {item.number}
              </h3>

              {/* Title */}

              <p className="mt-3 text-gray-600 font-medium">
                {item.title}
              </p>

            </div>

          ))}

        </div>

        {/* Features */}

        <div className="mt-24 grid gap-8 md:grid-cols-2">

          <div
            className="
            rounded-[32px]
            border
            border-white/30
            bg-white/30
            p-10
            backdrop-blur-3xl
            shadow-xl
            "
          >

            <h3 className="text-3xl font-bold text-gray-900">
              Why Organizations Trust Us
            </h3>

            <ul className="mt-8 space-y-5">

              {[
                "Enterprise-grade cybersecurity solutions",
                "ISO 27001, ISO 9001, ISO 22301 & ISO 27701 expertise",
                "Risk-based security consulting",
                "Industry best practices",
                "Continuous improvement approach",
              ].map((item) => (

                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="text-blue-600 text-xl">✔</span>

                  {item}

                </li>

              ))}

            </ul>

          </div>

          <div
            className="
            rounded-[32px]
            border
            border-white/30
            bg-gradient-to-br
            from-blue-600
            to-indigo-700
            p-10
            text-white
            shadow-2xl
            "
          >

            <h3 className="text-3xl font-bold">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-blue-100">
              Our mission is to empower businesses with globally recognized
              security frameworks, helping them reduce cyber risks,
              strengthen governance, and achieve long-term compliance with
              international standards.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}