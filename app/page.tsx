import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-marketing-black-bg">
        <div className="container mx-auto max-w-7xl p-6 lg:p-0">
          {/* hero section */}
          <Hero />
          {/* service section */}
          <Services />
        </div>
      </main>
    </>
  );
}
