import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      number: 50,
      suffix: "+",
      title: "Projects Delivered",
      color: "text-blue-600",
    },
    {
      number: 30,
      suffix: "+",
      title: "Happy Clients",
      color: "text-indigo-600",
    },
    {
      number: 100,
      suffix: "%",
      title: "Compliance Support",
      color: "text-green-600",
    },
    {
      number: 24,
      suffix: "/7",
      title: "Support Available",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-24">

      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 animate-pulse rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 animate-pulse rounded-full bg-indigo-400/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HERO */}
        <div className="mb-20 text-center">

          <div className="inline-block rounded-full border border-white/20 bg-white/30 px-6 py-3 text-sm font-medium text-blue-700 shadow-lg backdrop-blur-xl">
            About Adescare Technologies
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
            Building Secure <br />
            Digital Futures
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            Adescare Technologies helps organizations strengthen cybersecurity,
            achieve ISO 27001 compliance, and create scalable, secure digital
            infrastructures for the modern enterprise world.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <div className="space-y-8">

            {/* Glass Card */}
            <div className="rounded-[2rem] border border-white/20 bg-white/40 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-200/40">

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl backdrop-blur-xl">
                  🔐
                </div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Who We Are
                </h2>
              </div>

              <p className="leading-relaxed text-gray-600">
                We are a cybersecurity and compliance-focused company helping
                businesses secure their operations with ISO 27001
                implementation, auditing, risk management, and enterprise-grade
                cybersecurity services.
              </p>
            </div>

            {/* Glass Card */}
            <div className="rounded-[2rem] border border-white/20 bg-white/40 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-200/40">

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-3xl backdrop-blur-xl">
                  🚀
                </div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>

              <p className="leading-relaxed text-gray-600">
                Our mission is to empower organizations with modern security
                frameworks, reduce cyber risks, and ensure complete compliance
                with international standards.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid gap-6">

            {/* Card 1 */}
            <div className="group rounded-[2rem] border border-white/20 bg-white/40 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-blue-500/10">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl backdrop-blur-xl transition duration-500 group-hover:scale-110">
                🛡️
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                Security First
              </h3>

              <p className="leading-relaxed text-gray-600">
                We prioritize security architecture, data protection, and
                enterprise-grade cybersecurity for every client.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-[2rem] border border-white/20 bg-white/40 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-indigo-500/10">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-3xl backdrop-blur-xl transition duration-500 group-hover:scale-110">
                📜
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                Compliance Experts
              </h3>

              <p className="leading-relaxed text-gray-600">
                Expertise in ISO 27001 implementation, auditing, compliance,
                and governance frameworks.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-[2rem] border border-white/20 bg-white/40 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-cyan-500/10">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl backdrop-blur-xl transition duration-500 group-hover:scale-110">
                ⚡
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                Scalable Solutions
              </h3>

              <p className="leading-relaxed text-gray-600">
                Secure, scalable, and future-ready digital solutions built for
                modern enterprises.
              </p>
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div ref={ref} className="mt-24">

          <div className="mb-14 text-center">
            <h2 className="text-5xl font-bold text-gray-900">
              Our Impact
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Trusted by businesses for cybersecurity and compliance solutions.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => (
              <div
                key={index}
                className="group rounded-[2rem] border border-white/20 bg-white/40 p-10 text-center shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
              >

                {/* Animated Number */}
                <h3
                  className={`text-5xl font-bold ${item.color} drop-shadow-lg`}
                >
                  {inView && (
                    <CountUp
                      end={item.number}
                      duration={2.5}
                    />
                  )}
                  {item.suffix}
                </h3>

                {/* Divider */}
                <div className="mx-auto my-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-500 group-hover:w-24"></div>

                {/* Title */}
                <p className="text-lg font-medium text-gray-700">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}