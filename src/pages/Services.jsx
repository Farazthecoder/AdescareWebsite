 import ServiceAccordion from "../components/services/ServiceAccording";
import ServiceCTA from "../components/services/ServiceCTA";
import ServiceHero from "../components/services/ServiceHero";
import WhyChooseUs from "../components/services/WhyChooseUs";


export default function Services() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <ServiceHero/>
      <ServiceAccordion />
      <WhyChooseUs />
      <ServiceCTA />
    </main>
  );
}