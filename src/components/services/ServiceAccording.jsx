import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import servicesData from "../../data/servicesdata";

export default function ServiceAccordion() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 px-6">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-indigo-400/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="rounded-full border border-white/30 bg-white/30 px-5 py-2 text-sm font-semibold text-blue-700 backdrop-blur-xl shadow-lg">
            Enterprise Solutions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900">
            What We Offer
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive cybersecurity, compliance and enterprise
            risk management services designed for modern businesses.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-6">

          {servicesData.map((item, index) => {

            const open = active === index;

            return (
              <div
                key={index}
                className="
                overflow-hidden
                rounded-[28px]
                border
                border-white/30
                bg-white/30
                backdrop-blur-3xl
                shadow-xl
                transition-all
                duration-500
                "
              >

                {/* Header */}
                <button
                  onClick={() =>
                    setActive(open ? -1 : index)
                  }
                  className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-8
                  py-6
                  text-left
                  "
                >

                  <div className="flex items-center gap-5">

                    <div
                      className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-500/10
                      text-3xl
                      "
                    >
                      {item.icon}
                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.category}
                      </h3>

                      <p className="mt-1 text-sm text-gray-600">
                        {item.description}
                      </p>

                    </div>

                  </div>

                  <ChevronDown
                    className={`transition duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                    size={30}
                  />

                </button>

                {/* Content */}

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    open ? "max-h-[700px]" : "max-h-0"
                  }`}
                >

                  <div className="grid md:grid-cols-2 gap-4 px-8 pb-8">

                    {item.services.map((service, i) => (

                      <div
                        key={i}
                        className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-white/20
                        bg-white/40
                        p-4
                        backdrop-blur-xl
                        transition
                        duration-300
                        hover:scale-[1.02]
                        hover:bg-blue-500/10
                        "
                      >

                        <CheckCircle2
                          size={20}
                          className="text-blue-600 shrink-0"
                        />

                        <span className="text-gray-700">
                          {service}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>
            );

          })}

        </div>
      </div>
    </section>
  );
}