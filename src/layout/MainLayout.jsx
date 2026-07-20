import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlassTransition from "../components/GlassTransition";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="container mx-auto py-6">
        <GlassTransition>{children}</GlassTransition>
        {/* {children} */}
      </main>
      <Footer />
    </div>
  );
}
