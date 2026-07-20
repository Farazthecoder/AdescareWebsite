import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ISOReadiness() {
  useEffect(() => {
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    gsap.from(".hero-card", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  const journey = [
    "Gap Assessment",
    "ISMS Design",
    "Security Policies",
    "Risk Assessment",
    "Asset Inventory",
    "Statement of Applicability",
    "Documentation",
    "Internal Audit",
    "Management Review",
    "Employee Training",
    "Corrective Actions",
    "Stage 1 Audit",
    "Stage 2 Audit",
    "Certification",
  ];

  return (
    <div className="overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden py-28">

        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="hero-card">

            <div className="inline-flex rounded-full border border-blue-200 bg-white/60 px-5 py-2 backdrop-blur-xl shadow-lg">

              ISO Readiness Services

            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-7xl">

              Get ISO Certified

              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">

                Faster. Smarter. Better.

              </span>

            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">

              We help organizations prepare for ISO/IEC certifications by
              implementing security controls, documentation, ISMS,
              internal audits and certification readiness.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <button className="rounded-2xl border border-blue-200 bg-white/60 px-8 py-4 font-semibold backdrop-blur-xl transition hover:scale-105">

                View Services

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= JOURNEY ================= */}

      <section className="py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="fade-up text-center">

            <h2 className="text-4xl font-black text-slate-900">

              ISO Readiness Journey

            </h2>

            <p className="mt-4 text-slate-600">

              From Assessment to Certification

            </p>

          </div>

          <div className="relative mt-20">

            <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-gradient-to-b from-blue-500 to-cyan-400"></div>

            <div className="space-y-10">

              {journey.map((item, index) => (

                <div
                  key={index}
                  className="fade-up relative flex gap-8"
                >

                  <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-xl">

                    {index + 1}

                  </div>

                  <div className="flex-1 rounded-3xl border border-white/30 bg-white/60 p-8 backdrop-blur-2xl shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-blue-200">

                    <h3 className="text-2xl font-bold">

                      {item}

                    </h3>

                    <p className="mt-3 text-slate-600">

                      Expert guidance and implementation support for
                      {` ${item}`} to ensure successful ISO certification.

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

            {/* ================= SERVICES ================= */}

      <section className="py-28 bg-gradient-to-b from-white to-slate-50">

        <div className="mx-auto max-w-7xl px-6">

          <div className="fade-up text-center">

            <div className="inline-flex rounded-full border border-blue-200 bg-white/60 px-5 py-2 backdrop-blur-xl shadow-lg">
              Complete ISO Readiness Services
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black text-slate-900">
              Everything Required
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                For Successful Certification
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Our experts guide you through every stage of ISO implementation,
              ensuring a smooth certification journey with minimal disruption.
            </p>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Gap Assessment against ISO Requirements",
              "ISMS Design & Implementation",
              "Information Security Policy Development",
              "Risk Assessment & Treatment Planning",
              "Asset Inventory & Classification",
              "Statement of Applicability (SoA)",
              "Documentation & Record Management",
              "Internal Audit Planning",
              "Management Review Support",
              "Employee Awareness & Training",
              "Corrective Action Tracking",
              "Stage 1 & Stage 2 Audit Support",
              "Surveillance & Recertification Audits",
            ].map((item, index) => (

              <div
                key={index}
                className="
                fade-up
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/30
                bg-white/60
                p-7
                backdrop-blur-2xl
                shadow-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-blue-300/30
                "
              >

                {/* Glass Reflection */}
                <div
                  className="
                  absolute
                  left-[-120%]
                  top-0
                  h-full
                  w-[60%]
                  rotate-12
                  bg-white/20
                  blur-2xl
                  transition-all
                  duration-1000
                  group-hover:left-[140%]
                  "
                />

                <div className="relative z-10">

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg">

                    ✓

                  </div>

                  <h3 className="text-xl font-bold text-slate-900">

                    {item}

                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">

                    Comprehensive implementation, documentation and expert
                    consulting to ensure successful compliance.

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY ADESCARE ================= */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="fade-up text-center">

            <h2 className="text-5xl font-black text-slate-900">

              Why Choose Adescare?

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

              We simplify complex compliance frameworks into practical,
              measurable and business-focused solutions.

            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-4">

            {[
              {
                title: "100%",
                sub: "Certification Guidance",
              },
              {
                title: "24×7",
                sub: "Expert Support",
              },
              {
                title: "Risk Based",
                sub: "Approach",
              },
              {
                title: "Global",
                sub: "Best Practices",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="
                fade-up
                rounded-[32px]
                border
                border-white/30
                bg-white/60
                p-10
                text-center
                backdrop-blur-2xl
                shadow-xl
                transition-all
                duration-500
                hover:-translate-y-2
                "
              >

                <h3 className="text-4xl font-black text-blue-600">

                  {item.title}

                </h3>

                <p className="mt-4 text-slate-600">

                  {item.sub}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="pb-28">

        <div className="mx-auto max-w-6xl px-6">

          <div
            className="
            fade-up
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            from-blue-700
            via-blue-600
            to-cyan-500
            p-14
            text-center
            text-white
            shadow-[0_30px_80px_rgba(59,130,246,.25)]
            "
          >

            <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-white/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-cyan-300/20 blur-[140px]" />

            <h2 className="relative text-5xl font-black">

              Ready For ISO Certification?

            </h2>

            <p className="relative mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">

              Let our experts guide your organization through every phase of
              ISO implementation, compliance and certification readiness.

            </p>

          </div>

        </div>

      </section>

    </div>
  );
}