import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-marketing-black-bg">
        <div className="container mx-auto max-w-7xl">

        <Hero />
        </div>
      </main>
    </>
  );
}
