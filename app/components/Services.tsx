import Image from "next/image";
import imgService from "@/public/images/imgService.png";

const Services = () => {
  return (
    <section className="mt-10 pb-10 flex flex-col justify-center items-center">
      <div className="relative h-[390px] w-[275px] md:h-[400px] md:w-[300px]">
        <Image
          alt="services"
          src={imgService}
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <p className="uppercase text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black absolute top-36 -left-10 md:-left-40">
          our
        </p>
        <p className="absolute left-32 md:left-40 top-60 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-marketing-orange-200 font-black mb-4">
          services
        </p>
      </div>

      <div className=""></div>
    </section>
  );
};

export default Services;
