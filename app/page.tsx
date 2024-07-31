import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkFlow from "./components/WorkFlow";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <div className="container mx-auto max-w-7xl p-10 md:p-6 lg:p-0">
          {/* hero section */}
          <Hero />
          {/* service section */}
          <Services />

          {/* work flow */}
          <WorkFlow />
        </div>
      </main>
    </>
  );
}
